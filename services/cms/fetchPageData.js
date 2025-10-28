import { genericPageService } from '@/services/cms/apisCMS';
import { fetchJSON } from '@/util/fetchAPI';

export async function fetchPageData({ extraApiPaths, includeInstagram = false } = {}) {
    const promises = [
      genericPageService.getMenu(),
    ];

    // 只有在需要時才調用 Instagram API
    if (includeInstagram) {
      const accessToken = process.env.IG_ACCESS_TOKEN;
      const igPostsUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,thumbnail_url,timestamp,username&limit=25&access_token=${accessToken}`;
      promises.push(
        fetchJSON(igPostsUrl).catch((e) => {
          console.error('Failed to fetch Instagram data:', e);
          return { data: [] };
        })
      );
    }

    if (extraApiPaths) {
      const paths = Array.isArray(extraApiPaths) ? extraApiPaths : [extraApiPaths];
      paths.forEach(path => {
        const appUrlApiPaths = [
          '/api/responsibility-prd',
          '/api/responsibility-dev',
        ];
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
      console.error("Error in fetchPageData:", error);
      throw error;
    }
  }
