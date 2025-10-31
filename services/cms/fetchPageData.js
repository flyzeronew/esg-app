import { genericPageService } from '@/services/cms/apisCMS';
import { fetchJSON } from '@/util/fetchAPI';
import fs from 'fs';
import path from 'path';

export async function fetchPageData({ extraApiPaths, includeInstagram = false } = {}) {
  const promises = [genericPageService.getMenu()];

  if (includeInstagram) {
    const accessToken = process.env.IG_ACCESS_TOKEN;
    const REFRESH_INTERVAL = 29 * 24 * 60 * 60 * 1000; // 29天
    // 將 token 存在 services 目錄下
    const tokenStorePath = path.join(process.cwd(), 'services', 'ig_access_info.json');
    let validAccessToken = accessToken;
    let tokenInfo = { lastRefresh: 0, accessToken };

    // 嘗試讀取檔案中的現有 token 資訊
    try {
      if (fs.existsSync(tokenStorePath)) {
        const raw = fs.readFileSync(tokenStorePath, 'utf-8');
        tokenInfo = JSON.parse(raw);
      }
    } catch (err) {
      console.warn('⚠️ 無法讀取現有 IG token 資料，將重新建立。', err);
    }

    const now = Date.now();
    const lastRefresh = tokenInfo.lastRefresh || 0;

    // 超過 29天才刷新
    if (now - lastRefresh > REFRESH_INTERVAL) {
      try {
        console.log('🔄 正在刷新 Instagram access token...');
        const refreshUrl = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${tokenInfo.accessToken}`;
        const refreshed = await fetchJSON(refreshUrl);
        if (refreshed.access_token) {
          validAccessToken = refreshed.access_token;
          tokenInfo = { lastRefresh: now, accessToken: validAccessToken };

          // 寫回檔案以持久化保存
          fs.writeFileSync(tokenStorePath, JSON.stringify(tokenInfo, null, 2), 'utf-8');
          console.log('✅ IG access token 已刷新並儲存。');
        } else {
          console.warn('⚠️ 無法刷新 IG token，使用舊的 token。');
        }
      } catch (e) {
        console.error('❌ 刷新 IG token 發生錯誤：', e);
      }
    } else {
      validAccessToken = tokenInfo.accessToken || accessToken;
    }

    console.log('使用的 IG token:', validAccessToken.slice(0, 10) + '...');
    const igPostsUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,thumbnail_url,timestamp,username&limit=25&access_token=${validAccessToken}`;

    promises.push(
      fetchJSON(igPostsUrl).catch((e) => {
        console.error('❌ 取得 Instagram 貼文失敗:', e);
        return { data: [] };
      })
    );
  }

  // 處理額外 API
  if (extraApiPaths) {
    const paths = Array.isArray(extraApiPaths) ? extraApiPaths : [extraApiPaths];
    paths.forEach(path => {
      const appUrlApiPaths = ['/api/responsibility-prd', '/api/responsibility-dev'];
      const isAppUrl = appUrlApiPaths.some(apiPath => path.startsWith(apiPath));
      const baseUrl = isAppUrl ? process.env.APP_URL : process.env.API_URL;
      promises.push(fetchJSON(new URL(path, baseUrl)));
    });
  }

  try {
    const results = await Promise.all(promises);
    const menu = results[0];
    let resultIndex = 1;
    const instagramData = includeInstagram ? results[resultIndex++] : null;
    const extraData = results.slice(resultIndex);
    return { menu, instagramData, extraData };
  } catch (error) {
    console.error('❌ Error in fetchPageData:', error);
    throw error;
  }
}
