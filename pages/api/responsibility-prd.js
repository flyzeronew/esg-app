export default function handler(req, res) {
    const data = [
        {
            "article_id": 242,
            "cover_img": "https://esg-statics-production.tvbs.com.tw/articles/img/cGpUov7569lK8QMELuzYWtqv7xRDuc4rcwvjzeyT.jpg",
            "title": "TVBS長篇專題「大照顧時代」奪卓越新聞獎",
            "description": "",
            "partner": {
                "id": 1,
                "name": "蝦皮商城",
                "logo": "/images/logo-view2.png",
                "introduction": "秉持「從心出發，實現美好生活」為核心，提供優質的產品與服務。"
            },
            "author_name": "flyzero",
            "article_genres": [
                {
                    "id": 1,
                    "name": "新趨勢",
                    "en_name": "trend",
                }
            ],
            "created_at": "2024-03-11T01:05:01.000000Z",
            "updated_at": "2024-03-11T01:05:01.000000Z"
        },
        {
            "article_id": 243,
            "cover_img": "https://esg-statics-production.tvbs.com.tw/articles/img/rcOOrjlBFYGc50JbJw8y4UypxKl8fwoBlNgGPiiF.jpg",
            "title": "TVBS台灣離島紀錄片「看見愛無限」獲雙佳績",
            "description": "",
            "partner": {
                "id": 1,
                "name": "蝦皮商城",
                "logo": "/images/logo-view2.png",
                "introduction": "秉持「從心出發，實現美好生活」為核心，提供優質的產品與服務。"
            },
            "author_name": "flyzero",
            "article_genres": [
                {
                    "id": 1,
                    "name": "新趨勢",
                    "en_name": "trend",
                }
            ],
            "created_at": "2024-03-11T01:05:01.000000Z",
            "updated_at": "2024-03-11T01:05:01.000000Z"
        }, 
        {
            "article_id": 244,
            "cover_img": "https://esg-statics-production.tvbs.com.tw/articles/img/tdvYyfaVBvkvcHPkfPHKp0iEorW9NaU9UcNT57I8.jpg",
            "title": "數位永續雙軸轉型　TVBS《健康2.0》獲鼎革獎楷模、ESG雙大獎",
            "description": "",
            "partner": {
                "id": 1,
                "name": "蝦皮商城",
                "logo": "/images/logo-view2.png",
                "introduction": "秉持「從心出發，實現美好生活」為核心，提供優質的產品與服務。"
            },
            "author_name": "flyzero",
            "article_genres": [
                {
                    "id": 1,
                    "name": "新趨勢",
                    "en_name": "trend",
                }
            ],
            "created_at": "2024-03-11T01:05:01.000000Z",
            "updated_at": "2024-03-11T01:05:01.000000Z"
        }, 
        {
            "article_id": 209,
            "cover_img": "https://esg-statics-production.tvbs.com.tw/article/img/uDT9CW02pZUS5CywI3aHFj6LsI2Bb1JnD8zhRX0a.jpg",
            "title": "30企業獲「減碳永續獎」　TVBS首家綠色福利媒體",
            "description": "宜睿智慧推出電子票券，2010年開始協助台灣企業進行數位轉型，超過千家以上的企業客戶採用，這回獲獎的有9間企業，其中TVBS不只報導永續內容，也將員工福利改發放電子票券，成為首家採取綠色福利的電視台，因此獲得肯定。",
            "partner": null,
            "author_name": "TVBS新聞網",
            "article_genres": [
                {
                    "id": 1,
                    "name": "新趨勢",
                    "en_name": "trend",
                }
            ],
            "created_at": "2024-03-11T01:05:01.000000Z",
            "updated_at": "2024-03-11T01:05:01.000000Z"
        },
        {
            "article_id": 245,
            "cover_img": "https://esg-statics-production.tvbs.com.tw/articles/img/oVHwnAaHHforwTpXayYGlRUnKn23fduZdPtl63Y8.jpg",
            "title": "TVBS企業志工日　前進肯愛協會伴長者　《甜蜜蜜》歌聲中繪櫻花",
            "description": "",
            "partner": {
                "id": 1,
                "name": "蝦皮商城",
                "logo": "/images/logo-view2.png",
                "introduction": "秉持「從心出發，實現美好生活」為核心，提供優質的產品與服務。"
            },
            "author_name": "flyzero",
            "article_genres": [
                {
                    "id": 1,
                    "name": "新趨勢",
                    "en_name": "trend",
                }
            ],
            "created_at": "2024-03-11T01:05:01.000000Z",
            "updated_at": "2024-03-11T01:05:01.000000Z"
        }, 
    ];
    res.status(200).json(data);
}

