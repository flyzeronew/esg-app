export default function handler(req, res) {
  const data = {
    "tips": [
      {
        "id": 1,
        "title": "吃完的免洗紙餐盒，需洗完再回收嗎？吃完的免洗紙餐盒，需洗完再回收嗎？",
        "url": "/tips/food/1",
        "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg",
        "description":"嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 1,
          "name": "食",
          "en_name": "food",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      },
      {
        "id": 2,
        "title": "全台灣二手衣平台哪裡有？",
        "url": "/tips/clothing/2",
        "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/OglOEkBttzYoUVs1TQFcy8g8J5zUFOSpphR1UZrv.jpg",
        "description":"222嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡嘗試替「舊愛」尋找新歡",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 2,
          "name": "衣",
          "en_name": "clothing",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      }
    ],
    "viewpoint":[
      {
        "id": 1,
        "title": "一菜三吃！淨零綠生活當道",
        "url": "/view/trend/1",
        "img": "https://esg-statics-staging.tvbs.com.tw/partner/videos/Zqv7rZPxyGP94CB9krcE1ar69iWBuSM6JU8hYjdA.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "article_genre": {
          "id": 1,
          "name": "新趨勢",
          "en_name": "trend",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      },
      {
        "id": 2,
        "title": "一菜三吃！淨零綠生活當道 首「惜」廚師教您如何吃在地",
        "url": "/view/environment/2",
        "img": "https://esg-statics-staging.tvbs.com.tw/partner/videos/KSTD4sLSIbMupvd4vhV8YppxblUTu47gnDHpYQpe.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "article_genre": {
          "id": 2,
          "name": "永續環境",
          "en_name": "environment",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      }
      
    ],
};
  
    res.status(200).json(data);
}

