export default function handler(req, res) {
    const data =  [
        {
            'color':'tagFoodColor',
            'genre':'食',
            'en_name':'food',
            'bgColor':'#FFC400',
            'txtColor':'#333333',
        },
        {
            'color':'tagClothingColor',
            'genre':'衣',
            'en_name':'clothing',
            'bgColor':'#E2F6F9',
            'txtColor':'#333333',
        },
        {
            'color':'tagHousingColor',
            'genre':'住',
            'en_name':'housing',
            'bgColor':'#D1FFE0',
            'txtColor':'#333333',
        },
        {
            'color':'tagTransportColor',
            'genre':'行',
            'en_name':'transport',
            'bgColor':'#00BAFF',
            'txtColor':'#333333',
        },
        {
            'color':'tagEducationColor',
            'genre':'育',
            'en_name':'education',
            'bgColor':'#00422C',
            'txtColor':'#fff',
        },
        {
            'color':'tagEntertainmentColor',
            'genre':'樂',
            'en_name':'entertainment',
            'bgColor':'#001C48',
            'txtColor':'#fff',
        },
    ];
    res.status(200).json(data);
}
