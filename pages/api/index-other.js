export default function handler(req, res) {
  const appUrl = process.env.APP_URL;
  const data = {
    "ourMissoin": {
      "title": "TVBS GOOD 品牌使命",
      "img": "/images/index-our01.png",
      "description": "TVBS持續為閱聽眾帶來更全面，更淺顯易懂的永續體驗，共創關懷環境生態與新聞學的永續殿堂",
      "url": `${appUrl}/responsibility`
    },
    "whatIsEsg": {
      "description": "ESG 如何影響世界",
      "detail": "ESG分別是環境保護（E，Environmental）、社會責任（S，Social）以及公司治理（G，governance）的縮寫，是一種新型態評估企業的數據與指標",
      "url": `https://esg.tvbs.com.tw/view/trend/248`
    },
    "activity": {
      "description": "一起實踐永續",
      "detail": "COMING SOON",
      "url": ""
    },
  };
  res.status(200).json(data);
}

