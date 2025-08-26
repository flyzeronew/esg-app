import { genericPageService } from '@/services/cms/apisCMS';
import { fetchJSON } from '@/util/fetchAPI';

export async function fetchPageData({ extraApiPaths } = {}) {
    const promises = [
      genericPageService.getMenu(),
      fetchJSON(new URL('/api/tips-color-mapping', process.env.APP_URL)),
    ];

    if (extraApiPaths) {
      const paths = Array.isArray(extraApiPaths) ? extraApiPaths : [extraApiPaths];
      paths.forEach(path => {
        const appUrlApiPaths = [
          '/api/tips-color-mapping',
          '/api/tips-genres',
          '/api/responsibility-prd',
          '/api/responsibility-dev',
        ];
        const isAppUrl = appUrlApiPaths.some(apiPath => path.startsWith(apiPath));
        const baseUrl = isAppUrl ? process.env.APP_URL : process.env.API_URL;
        promises.push(fetchJSON(new URL(path, baseUrl)));
      });
    }

    try {
      const [menu, colorMapping, ...extraData] = await Promise.all(promises);

      return { menu, colorMapping, extraData };
    } catch (error) {
      console.error("Error in fetchPageData:", error);
      throw error;
    }
  }
