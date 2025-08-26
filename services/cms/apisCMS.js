

import { fetchClient } from "@/util/fetchAPI";

const CONFIG = {
    BASE_URL: process.env.API_URL || 'https://api.esg.tvbs-staging.app',
    TIMEOUT: 5000,
  };
export const genericPageService = {
  // Fetch menu
  async getMenu() {
    try {
      const responsedata =  await fetchClient(`${CONFIG.BASE_URL}/api/menu`);
      const data = await responsedata.json();
      return data;
    } catch (error) {
      console.error('Error fetching Menu:', error);
      throw error;
    }
  },
 
};


export const pageSepcificServices = {
    async getTipsColors () {
        try {
            const responsedata =  await fetchClient(`${CONFIG.BASE_URL}/api/tips-color-mapping`);
            const data = await responsedata.json();
            return data;
        } catch (error) {
            console.error('Error fetching Menu:', error);
            throw error;
        }
    }
}
