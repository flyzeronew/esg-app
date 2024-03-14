export default function handler(req, res) {
    const data = [
        {
          "id": 1,
          "title": "吃完的免洗紙餐盒，需洗完再回收嗎？吃完的免洗紙餐盒，需洗完再回收嗎？",
          "url": "/tips/food/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg",
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
          "url": "/tips/clothing/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/OglOEkBttzYoUVs1TQFcy8g8J5zUFOSpphR1UZrv.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 2,
            "name": "衣",
            "en_name": "clothing",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          }
        },
        {
          "id": 3,
          "title": "環保電子書的優缺點？",
          "url": "/tips/housing/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/I0nqHDHhIrqXdPmYehn5JshXPnWBkylzhDZ4KPCt.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 3,
            "name": "住",
            "en_name": "housing",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          }
        },
        {
            "id": 4,
            "title": "電動車哪些廠牌真環保？",
            "url": "/tips/transport/1",
            "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/cYpNFalZ3yYeuSLhRIANPSuwc276roPX3WqmHxWN.jpg",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z",
            "tip_genre": {
              "id": 4,
              "name": "行",
              "en_name": "transport",
              "created_at": "2024-01-25T14:23:06.000000Z",
              "updated_at": "2024-01-25T14:23:06.000000Z"
            }
        },
        {
            "id": 5,
            "title": "台北綠色飯店有哪些？",
            "url": "/tips/education/1",
            "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/z6PPuVg1HO9Rw4mXJK82FNoknjOz3DmKO6dRXLD7.jpg",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z",
            "tip_genre": {
              "id": 5,
              "name": "育",
              "en_name": "education",
              "created_at": "2024-01-25T14:23:06.000000Z",
              "updated_at": "2024-01-25T14:23:06.000000Z"
            }
        },
        {
            "id": 6,
            "title": "低碳飲食怎麼吃才能瘦又環保？",
            "url": "/tips/entertainment/1",
            "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/S79pJQO3oWoj6GXRXoBGkMqyHDdn6zamsiQTBqck.jpg",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z",
            "tip_genre": {
              "id": 6,
              "name": "樂",
              "en_name": "entertainment",
              "created_at": "2024-01-25T14:23:06.000000Z",
              "updated_at": "2024-01-25T14:23:06.000000Z"
            }
        },
        {
          "id": 7,
          "title": "2吃完的免洗紙餐盒，需洗完再回收嗎？吃完的免洗紙餐盒，需洗完再回收嗎？",
          "url": "/tips/food/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg",
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
          "id": 8,
          "title": "2全台灣二手衣平台哪裡有？",
          "url": "/tips/clothing/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/OglOEkBttzYoUVs1TQFcy8g8J5zUFOSpphR1UZrv.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 2,
            "name": "衣",
            "en_name": "clothing",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          }
        },
        {
          "id": 9,
          "title": "2環保電子書的優缺點？",
          "url": "/tips/housing/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/I0nqHDHhIrqXdPmYehn5JshXPnWBkylzhDZ4KPCt.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 3,
            "name": "住",
            "en_name": "housing",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          }
        },
        {
            "id": 10,
            "title": "2電動車哪些廠牌真環保？",
            "url": "/tips/transport/1",
            "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/cYpNFalZ3yYeuSLhRIANPSuwc276roPX3WqmHxWN.jpg",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z",
            "tip_genre": {
              "id": 4,
              "name": "行",
              "en_name": "transport",
              "created_at": "2024-01-25T14:23:06.000000Z",
              "updated_at": "2024-01-25T14:23:06.000000Z"
            }
        },
        {
            "id": 11,
            "title": "2台北綠色飯店有哪些？",
            "url": "/tips/education/1",
            "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/z6PPuVg1HO9Rw4mXJK82FNoknjOz3DmKO6dRXLD7.jpg",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z",
            "tip_genre": {
              "id": 5,
              "name": "育",
              "en_name": "education",
              "created_at": "2024-01-25T14:23:06.000000Z",
              "updated_at": "2024-01-25T14:23:06.000000Z"
            }
        },
        {
            "id": 12,
            "title": "2低碳飲食怎麼吃才能瘦又環保？",
            "url": "/tips/entertainment/1",
            "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/S79pJQO3oWoj6GXRXoBGkMqyHDdn6zamsiQTBqck.jpg",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z",
            "tip_genre": {
              "id": 6,
              "name": "樂",
              "en_name": "entertainment",
              "created_at": "2024-01-25T14:23:06.000000Z",
              "updated_at": "2024-01-25T14:23:06.000000Z"
            }
        },
        {
          "id": 13,
          "title": "3吃完的免洗紙餐盒，需洗完再回收嗎？吃完的免洗紙餐盒，需洗完再回收嗎？",
          "url": "/tips/food/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/IcYiBBxwm3SokXcl6GQW3WZRhkCp48u2iNhjOahA.jpg",
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
          "id": 14,
          "title": "3全台灣二手衣平台哪裡有？",
          "url": "/tips/clothing/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/OglOEkBttzYoUVs1TQFcy8g8J5zUFOSpphR1UZrv.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 2,
            "name": "衣",
            "en_name": "clothing",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          }
        },
        {
          "id": 15,
          "title": "3環保電子書的優缺點？",
          "url": "/tips/housing/1",
          "img": "https://esg-statics-staging.tvbs.com.tw/partner/avatar/I0nqHDHhIrqXdPmYehn5JshXPnWBkylzhDZ4KPCt.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 3,
            "name": "住",
            "en_name": "housing",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          }
        }
      ];
    res.status(200).json(data);
}

