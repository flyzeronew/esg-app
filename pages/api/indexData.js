export default function handler(req, res) {
  const appUrl = process.env.APP_URL;
  const data = {
    "headline":[
      {
        "id": 1,
        "title": "擁抱永續，減塑重生",
        "url": "https://esg.tvbs.com.tw/exhibition/earthday/2024-april/index.html",
        "img": "https://esg-statics-staging.tvbs.com.tw/esg_pics/main01.jpg",
        "description":"實踐減塑變成日常，永續環保不再是口號",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z"
      },
    ],
    "ourMissoin":{
      "title":"TVBS ESG永續倡議大使",
      "img":"/images/index-our01.png",
      "description":"TVBS持續為閱聽眾帶來更全面，更淺顯易懂的永體，共創關懷環境生態與新聞學的永續殿堂",
      "url":`${appUrl}/responsibility`
    },
    "tips": [
      {
        "id": 1,
        "title": "廚房裡的果皮可以如何創新利用？",
        "url":`${appUrl}/tips/food/5`,
        "img":`${appUrl}/images/05_廚房裡的果皮可以如何創新利用_1.jpg`,
        "description":"",
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
        "title": "接收一封電子報會排出多少二氧化碳？",
        "url":`${appUrl}/tips/entertainment/6`,
        "img": `${appUrl}/images/06_接收一封電子報會排出多少二氧化碳_1.jpg`,
        "description":"",
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
        "id": 3,
        "title": "該選擇泡澡還是淋浴呢？",
        "url":`${appUrl}/tips/housing/8`,
        "img":`${appUrl}/images/08_該選擇泡澡還是淋浴呢_1.jpg`,
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
    ],
    "whatIsEsg":{
      "description":"什麼是ESG",
      "detail":"ESG分別是環境保護（E，Environmental）、社會責任（S，Social）以及公司治理（G，governance）的縮寫，是一種新型態評估企業的數據與指標",
      "url":`${appUrl}/view/trend/2`
    },
    "viewpoint":[
      {
        "id": 1,
        "title": "30企業獲「減碳永續獎」TVBS首家綠色福利媒體",
        "url": `${appUrl}/view/trend/3`,
        "img": "https://cc.tvbs.com.tw/img/upload/2024/03/22/20240322123921-0a6c3c74.jpg",
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
        "title": "省電作戰！冷氣窗型換變頻民眾：夏季電少4千",
        "url": `${appUrl}/view/trend/4`,
        "img": "https://cc.tvbs.com.tw/img/upload/2024/03/22/20240322123921-0a6c3c74.jpg",
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
        "id": 3,
        "title": "小心喝到塑膠！自來水煮沸「加1步驟」減9成微塑粒",
        "url": `${appUrl}/view/trend/5`,
        "img": "https://cc.tvbs.com.tw/img/upload/2024/01/20/20240120144017-aed2e3bf.jpg",
        "created_at": "2024-01-25T14:23:06.000000Z",
        "updated_at": "2024-01-25T14:23:06.000000Z",
        "article_genre": {
          "id": 1,
          "name": "新趨勢",
          "en_name": "trend",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      }
      
    ],
    "activity":{
      "description":"一起實踐永續",
      "detail":"COMING SOON",
      "url":""
    },
    "partners":[
      {
        "id": 17,
        "partner_genre_id": 1,
        "name": "富邦金控",
        "avatar":`${appUrl}/images/partner01.png`,
        "brief": "測試夥伴簡述",
        "introduction": "測試介紹報導",
        "exposed_at": "2024-02-29T20:26:00+08:00",
        "finished_at": "9999-12-31T23:59:59+08:00",
        "cover_img": "https://esg-statics-staging.tvbs.com.tw/partner/images/partner01.png",
        "video_title": "哈哈哈",
        "video_url": "https://www.youtube.com/shorts/Uz9k6QGqXj0",
        "video_cover_url": "https://esg-statics-staging.tvbs.com.tw/partner/videos/st04DZujQPUNpBVue1inurcTMlRTuoLDcNWxiNxr.jpg",
        "related_article_ids": "1,2,3",
        "created_at": "2024-03-01T12:27:54.000000Z",
        "updated_at": "2024-03-01T12:27:54.000000Z",
        "partner_genre": {
          "id": 1,
          "name": "永續企業",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      },
      {
        "id": 15,
        "partner_genre_id": 1,
        "name": "和泰集團",
        "avatar": `${appUrl}/images/partner02.png`,
        "brief": "一二三四五六七八九十一二三四五六七八",
        "introduction": "2017年底台灣大以「2030心大願景計畫 (Zetta Connected 2030；心大的諧音即為Zetta)」做為2020-2030的願景計畫主題，期許公司全體同仁勇敢假設、積極定下目標，企圖從那遙遠的未來，檢核現在應有作為。2022年，原設定之2030年目標已是中程目標(<10年)，為延續各項專案執行，延長心大願景計畫至2035年，更名為「 2035心大願景計畫 2.0(Zetta Connected 2.0) 」，並設定各項專案2035年度目標。期望台灣大在2035年成為萬物萬事的連結核心，除了連結人、物與時空外，更重要的是心與心相連，並以此回應聯合國SDGs，創造永續價值。我們帶給利害關係人五大面向的願景，涵蓋以「責任企業」為出發，帶領供應商「攜手創新」兩大基礎面向，達成「體驗未來」、「創利社會」、「自然共好」三大未來成就，並與本公司之創造卓越品牌價值緊密扣合，在永續發展的核心目標下，和八大利害關係人一起朝向超乎想像的未來滾動前進。",
        "exposed_at": "2024-02-29T14:37:00+08:00",
        "finished_at": "9999-12-31T23:59:59+08:00",
        "cover_img": "https://esg-statics-staging.tvbs.com.tw/partner/cover_img/flwlzwgIBgEDFDRQpfdndfyXfaWV17pwGhBv5uY8.jpg",
        "video_title": "影片標題",
        "video_url": "https://www.youtube.com/watch?v=IY9zqc0yD7Q&amp;amp;amp;pp=ygUJ6bql55W25Yue",
        "video_cover_url": "https://esg-statics-staging.tvbs.com.tw/partner/videos/q7ZYaWxV4YDCBorqTsmThmdEVVFxzLD8lK4haTBm.jpg",
        "related_article_ids": "5474,4577",
        "created_at": "2024-02-29T06:45:01.000000Z",
        "updated_at": "2024-02-29T10:21:08.000000Z",
        "partner_genre": {
          "id": 1,
          "name": "永續企業",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      },
      {
        "id": 14,
        "partner_genre_id": 1,
        "name": "全家便利商店",
        "avatar": `${appUrl}/images/partner03.png`,
        "brief": "7-ELEVEN 地球永續 你我日常",
        "introduction": "統一超商作為在地零售通路之一，於淨零轉型路上責無旁貸。我們分析自身關鍵環境議題且採取行動，聚焦回應淨零轉型戰略中的「能源轉型」、「產業轉型」及「生活轉型」，推展「減碳」、「減塑」及「惜食」永續行動，從自身營運出發，向外與供應商/物流夥伴一同減碳，並發揮超商與民眾生活緊密結合的特性，帶動民眾轉向低碳綠生活，偕同利害關係人一起邁步迎向更淨零永續的社會。",
        "exposed_at": "2024-02-29T11:44:00+08:00",
        "finished_at": "9999-12-31T23:59:59+08:00",
        "cover_img": "https://esg-statics-staging.tvbs.com.tw/partner/cover_img/pRD2eU4teUfU09LLy8E2dm8kk2oTmhnw6vl5uQNa.jpg",
        "video_title": "影片標題",
        "video_url": "https://www.youtube.com/watch?v=kHW-UVXOcLU",
        "video_cover_url": "https://esg-statics-staging.tvbs.com.tw/partner/videos/4w5clmiuvkfmLtu7FOOHMCWrPqA4NunsovCiTg1O.jpg",
        "related_article_ids": "trhrt,ˋˇㄓ,233",
        "created_at": "2024-02-29T03:47:43.000000Z",
        "updated_at": "2024-02-29T03:47:43.000000Z",
        "partner_genre": {
          "id": 1,
          "name": "永續企業",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      },
      {
        "id": 13,
        "partner_genre_id": 3,
        "name": "家樂福",
        "avatar": `${appUrl}/images/partner04.png`,
        "brief": "ESG永續金融，給世界一個更好的台灣",
        "introduction": "金融業管理社會大眾的資金，透過良好的引導，將資金注入打造永續家園需要的地方，以金融影響力推動全體社會邁向永續。這是玉山的使命，是玉山的責任，也是玉山自創立以來抱持的堅定信念。",
        "exposed_at": "2024-02-26T11:52:00+08:00",
        "finished_at": "9999-12-31T23:59:59+08:00",
        "cover_img": "https://esg-statics-staging.tvbs.com.tw/partner/cover_img/OayGnsFgXZKG91eYShQXIA5CGsv1AqLnn2OspIW5.jpg",
        "video_title": "影片標題",
        "video_url": "https://www.youtube.com/watch?v=d-3cEQ1d1E4",
        "video_cover_url": "https://esg-statics-staging.tvbs.com.tw/partner/videos/mG9Yy6eQn0R2A6yMnfiVRRXdpHN44Mq7XdiziuQW.jpg",
        "related_article_ids": "e5y,65757",
        "created_at": "2024-02-25T19:59:01.000000Z",
        "updated_at": "2024-02-25T19:59:01.000000Z",
        "partner_genre": {
          "id": 3,
          "name": "團體與個人",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      },
      {
        "id": 12,
        "partner_genre_id": 3,
        "name": "蝦皮",
        "avatar": `${appUrl}/images/partner05.png`,
        "brief": "星巴克共愛地球™ 計劃是我們對品牌的承諾",
        "introduction": "Starbucks™ Shared Planet.™ 星巴克共愛地球™ 計劃是我們對品牌的承諾，從採購咖啡豆的源頭開始，重視與關注減少環境污染的議題，同時參與產地社區的建設與服務。",
        "exposed_at": "2024-02-23T15:47:00+08:00",
        "finished_at": "9999-12-31T23:59:59+08:00",
        "cover_img": "https://esg-statics-staging.tvbs.com.tw/partner/cover_img/tdNNPLCdKhOw0ReKhcoIjlf9QZ1d93pWiutK6QJ9.jpg",
        "video_title": "影片標題",
        "video_url": "https://www.youtube.com/watch?v=OuSzJNkFdyE",
        "video_cover_url": "https://esg-statics-staging.tvbs.com.tw/partner/videos/vaYTKvtJ9c9xw7AfXjoHSOL4fhrM5L8xkas2WmOK.jpg",
        "related_article_ids": "ˋˇˊˋ,3455,fgrt",
        "created_at": "2024-02-22T23:50:35.000000Z",
        "updated_at": "2024-02-27T06:31:54.000000Z",
        "partner_genre": {
          "id": 3,
          "name": "團體與個人",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      },
      {
        "id": 11,
        "partner_genre_id": 2,
        "name": "日月光文教基金會",
        "avatar": `${appUrl}/images/partner06.png`,
        "brief": "簡述的寬度不能超過 30 個字簡述的寬度不能超過 30 個字",
        "introduction": "我們始終相信，咖啡將持續帶來美好的體驗\r\n\r\n也因為有您的參與，讓一杯咖啡的意義遠超乎我們的想像。\r\n\r\nStarbucks™ Shared Planet.™ 星巴克共愛地球™ 計劃是我們對品牌的承諾，從採購咖啡豆的源頭開始，重視與關注減少環境污染的議題，同時參與產地社區的建設與服務。盡自己的一份力量 讓更多美好的事物可以傳播開來，正是此計劃的原始初衷。",
        "exposed_at": "2024-02-23T15:09:00+08:00",
        "finished_at": "9999-12-31T23:59:59+08:00",
        "cover_img": "https://esg-statics-staging.tvbs.com.tw/partner/cover_img/GaeWYUb8NztV7jwlK39QH8zq9mqiuJJZ7zUuKGHu.jpg",
        "video_title": "影片標題",
        "video_url": "https://www.youtube.com/watch?v=kHW-UVXOcLU",
        "video_cover_url": "https://esg-statics-staging.tvbs.com.tw/partner/videos/xR6LBoHTMmmceVADVcvBW3DrTQ03xwaf9butBS3B.jpg",
        "related_article_ids": "ˇˇˇˋˊ˙,gr,5365",
        "created_at": "2024-02-22T23:22:00.000000Z",
        "updated_at": "2024-02-22T23:22:00.000000Z",
        "partner_genre": {
          "id": 2,
          "name": "永續城市",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      }
    ]
};
  
    res.status(200).json(data);
}

