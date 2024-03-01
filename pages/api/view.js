export default function handler(req, res) {
    const data =
            {
                'main_vision':{
                    'cover_img':'/images/esg02.jpg',
                    'title':'「台灣製造」超夯環保吸管、餐具 連美國白宮、蘋果公司都愛用',
                    "description": "什麼環保餐具這麼特別，讓星巴克、遠在美國白宮的環保紙杯，以及蘋果公司員工餐廳環保餐具，都愛使用這家公司的產品。原來這家公司來自台中，專門研發可分解材質的吸管和餐具，標榜對環境不會產生負擔，連海龜都能使用，究竟有甚麼特別？帶您來看。",
                },
                'article_list':[
                    {
                        'article_id':1,
                        'cover_img':'/images/esg06.jpg',
                        'title':'快訊／妻爆是180CM正妹！陪練畫面流出　大谷翔平曝老婆身分',
                        'url':'/view/article/1',
                        "is_blank": 0,
                        'youtube':'2mCSYvcfhtc',
                        'partner_logo':'',
                        'author_name':'莊雅婷',
                        "view_genre": {
                            "id": 1,
                            "name": "新趨勢",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                    {
                        'article_id':2,
                        'cover_img':'/images/esg02.jpg',
                        'title':'全聯300家惜食門市，幫社福團體1123萬人次加菜',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/logo-view.png',
                        'author_name':'全聯福利中心',
                        "view_genre": {
                            "id": 2,
                            "name": "永續企業",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                    {
                        'article_id':3,
                        'cover_img':'/images/esg03.jpg',
                        'title':'蝦皮商城讓你用最划算的價格買到所有需要、想要的商品，包含美妝保健、流行服飾配件、母嬰居家、美食旅遊票券、3C家電影音等千萬件熱銷好物等你來。',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/logo-view2.png',
                        'author_name':'蝦皮商城',
                        "view_genre": {
                            "id": 3,
                            "name": "永續環境",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    }, 
                    {
                        'article_id':4,
                        'cover_img':'/images/esg04.jpg',
                        'title':'雀巢一貫提倡良好通暢的溝通，並珍視與每一個顧客的意見指教，如果您有任何建議或是想更了解雀巢公司及產品，歡迎您與我們聯繫。',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/partner01.jpg',
                        'author_name':'雀巢',
                        "view_genre": {
                            "id": 4,
                            "name": "綠色生活",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                    {
                        'article_id':5,
                        'cover_img':'/images/esg06.jpg',
                        'title':'快訊／妻爆是180CM正妹！陪練畫面流出　大谷翔平曝老婆身分',
                        'url':'/view/article/1',
                        "is_blank": 1,
                        'youtube':'2mCSYvcfhtc',
                        'partner_logo':'',
                        'author_name':'莊雅婷',
                        "view_genre": {
                            "id": 1,
                            "name": "新趨勢",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                    {
                        'article_id':6,
                        'cover_img':'/images/esg02.jpg',
                        'title':'全聯300家惜食門市，幫社福團體1123萬人次加菜',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/logo-view.png',
                        'author_name':'全聯福利中心',
                        "view_genre": {
                            "id": 2,
                            "name": "永續企業",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                    {
                        'article_id':7,
                        'cover_img':'/images/esg03.jpg',
                        'title':'蝦皮商城讓你用最划算的價格買到所有需要、想要的商品，包含美妝保健、流行服飾配件、母嬰居家、美食旅遊票券、3C家電影音等千萬件熱銷好物等你來。',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/logo-view2.png',
                        'author_name':'蝦皮商城',
                        "view_genre": {
                            "id": 3,
                            "name": "永續環境",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    }, 
                    {
                        'article_id':8,
                        'cover_img':'/images/esg04.jpg',
                        'title':'雀巢一貫提倡良好通暢的溝通，並珍視與每一個顧客的意見指教，如果您有任何建議或是想更了解雀巢公司及產品，歡迎您與我們聯繫。',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/partner01.jpg',
                        'author_name':'雀巢',
                        "view_genre": {
                            "id": 4,
                            "name": "綠色生活",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                    {
                        'article_id':9,
                        'cover_img':'/images/esg06.jpg',
                        'title':'快訊／妻爆是180CM正妹！陪練畫面流出　大谷翔平曝老婆身分',
                        'url':'/view/article/1',
                        "is_blank": 1,
                        'youtube':'2mCSYvcfhtc',
                        'partner_logo':'',
                        'author_name':'莊雅婷',
                        "view_genre": {
                            "id": 1,
                            "name": "新趨勢",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                    {
                        'article_id':10,
                        'cover_img':'/images/esg02.jpg',
                        'title':'全聯300家惜食門市，幫社福團體1123萬人次加菜',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/logo-view.png',
                        'author_name':'全聯福利中心',
                        "view_genre": {
                            "id": 2,
                            "name": "永續企業",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                    {
                        'article_id':11,
                        'cover_img':'/images/esg03.jpg',
                        'title':'蝦皮商城讓你用最划算的價格買到所有需要、想要的商品，包含美妝保健、流行服飾配件、母嬰居家、美食旅遊票券、3C家電影音等千萬件熱銷好物等你來。',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/logo-view2.png',
                        'author_name':'蝦皮商城',
                        "view_genre": {
                            "id": 3,
                            "name": "永續環境",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    }, 
                    {
                        'article_id':12,
                        'cover_img':'/images/esg04.jpg',
                        'title':'雀巢一貫提倡良好通暢的溝通，並珍視與每一個顧客的意見指教，如果您有任何建議或是想更了解雀巢公司及產品，歡迎您與我們聯繫。',
                        'url':'javascript:void(0)',
                        "is_blank": 0,
                        'youtube':'',
                        'partner_logo':'/images/partner01.jpg',
                        'author_name':'雀巢',
                        "view_genre": {
                            "id": 4,
                            "name": "綠色生活",
                            "created_at": "2024-01-25T14:23:06.000000Z",
                            "updated_at": "2024-01-25T14:23:06.000000Z"
                        }
                    },
                ],
            }

    res.status(200).json(data);
}