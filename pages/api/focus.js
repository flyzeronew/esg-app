export default function handler(req, res) {
    const data = {
            'list':[
                {
                    'title':'台灣剩食危機',
                    'txt':'每人每天浪費一個便當！',
                    'url':'javascript:void(0)',
                    'img':'images/food01.jpg'
                },
                {
                    'title':'碳排放',
                    'txt':'碳排放之重，大地喘息之聲。攜手減碳，寶島綠意永續。',
                    'url':'javascript:void(0)',
                    'img':'images/food02.jpg'
                },
                {
                    'title':'氣候變遷',
                    'txt':'大地呼籲，氣候變遷警世，太陽炙烤，風雨無常，為環保，緩解氣候危機。',
                    'url':'javascript:void(0)',
                    'img':'images/food03.jpg'
                },
            ]
        };
    res.status(200).json(data);
}