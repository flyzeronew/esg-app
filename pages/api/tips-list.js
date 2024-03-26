export default function handler(req, res) {
  const data = [
      {
        "id": 1,
        "title": "烹飪時如何節省能源？",
        "url": "/tips/food/1",
        "img": "/images/01_烹飪時如何節省能源_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 1,
          "name": "食",
          "en_name": "food",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
      {
        "id": 2,
        "title": "你的洗衣方式環保嗎",
        "url": "/tips/clothing/2",
        "img": "/images/02_你的洗衣方式環保嗎_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 2,
          "name": "衣",
          "en_name": "clothing",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
      {
        "id": 3,
        "title": "如何實踐環保育兒？",
        "url": "/tips/education/3",
        "img": "/images/03_如何實踐環保育兒_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 5,
          "name": "育",
          "en_name": "education",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
      {
          "id": 4,
          "title": "如何有效節能並保持家中舒適溫度？",
          "url": "/tips/housing/4",
          "img": "/images/04_如何有效節能並保持家中溫度_1.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 3,
            "name": "住",
            "en_name": "housing",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          },
      },
      {
          "id": 5,
          "title": "廚房裡的果皮可以如何創新利用？",
          "url": "/tips/food/5",
          "img": "/images/05_廚房裡的果皮可以如何創新利用_1.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 1,
            "name": "食",
            "en_name": "food",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z",
          },
      },
      {
          "id": 6,
          "title": "接收一封電子報會排出多少二氧化碳？",
          "url": "/tips/entertainment/6",
          "img": "/images/06_接收一封電子報會排出多少二氧化碳_1.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 6,
            "name": "樂",
            "en_name": "entertainment",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          },
      },
      {
        "id": 7,
        "title": "今天選擇蔬食嗎？",
        "url": "/tips/food/7",
        "img": "/images/07_今天選擇蔬食嗎_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 1,
          "name": "食",
          "en_name": "food",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
      {
        "id": 8,
        "title": "該選擇泡澡還是淋浴呢？",
        "url": "/tips/housing/8",
        "img": "/images/08_該選擇泡澡還是淋浴呢_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 3,
          "name": "住",
          "en_name": "housing",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
      {
        "id": 9,
        "title": "你的衣櫃永續嗎?",
        "url": "/tips/clothing/9",
        "img": "/images/09_你的衣櫃永續嗎_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 2,
          "name": "衣",
          "en_name": "clothing",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
      {
          "id": 10,
          "title": "哪些符合綠色債卷發行條件的計畫？",
          "url": "/tips/education/10",
          "img": "/images/010_哪些符合綠色債卷發行條件的計畫_1.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 5,
            "name": "育",
            "en_name": "education",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          },
      },
      {
          "id": 11,
          "title": "你的環保杯是哪一種?",
          "url": "/tips/food/11",
          "img": "/images/011_你的環保杯是哪一種_1.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 1,
            "name": "食",
            "en_name": "food",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z",
          },
      },
      {
          "id": 12,
          "title": "節能燈泡怎麼選?",
          "url": "/tips/housing/12",
          "img": "/images/012_節能燈泡怎麼選_1.jpg",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z",
          "tip_genre": {
            "id": 3,
            "name": "住",
            "en_name": "housing",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
          },
      },
      {
        "id": 13,
        "title": "行車省油冷知識",
        "url": "/tips/transport/13",
        "img": "/images/013_行車省油冷知識_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 1,
          "name": "食",
          "en_name": "food",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
      {
        "id": 14,
        "title": "垃圾分類冷知識",
        "url": "/tips/housing/14",
        "img": "/images/014_垃圾分類冷知識_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 3,
          "name": "住",
          "en_name": "housing",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
      {
        "id": 15,
        "title": "夏日省電方式",
        "url": "/tips/housing/15",
        "img": "/images/015_夏日省電方式_1.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "tip_genre": {
          "id": 3,
          "name": "住",
          "en_name": "housing",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
      },
    ];
  res.status(200).json(data);
}
