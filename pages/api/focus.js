export default function handler(req, res) {
    const data = [
            {
                'title':'台灣剩食危機',
                'description':'每人每天浪費一個便當！',
                'url':'#',
                'cover_img':'images/food01.jpg',
                "is_blank": 0,
                "status": 1,
            },
            {
                'title':'碳排放',
                'description':'碳排放之重，大地喘息之聲。攜手減碳，寶島綠意永續。',
                'url':'#',
                'cover_img':'images/food02.jpg',
                "is_blank": 0,
                "status": 1,
            },
            {
                'title':'氣候變遷',
                'description':'大地呼籲，氣候變遷警世，太陽炙烤，風雨無常，為環保，緩解氣候危機。',
                'url':'#',
                'cover_img':'images/food03.jpg',
                "is_blank": 0,
                "status": 1,
            },
        ];
    res.status(200).json(data);
}