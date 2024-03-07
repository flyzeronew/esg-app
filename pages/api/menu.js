export default function handler(req, res) {
    const appUrl = process.env.APP_URL;
    const data = [ 
            {
                'title':'未來焦點',
                'url':'/focus',
                'page_name':'focus',
                'child':[]
            },
            {
                'title':'永續觀點',
                'url':'#',
                'page_name':'view',
                'child':[
                    {
                        'title':'全部',
                        'url':appUrl+'/view',
                    },
                    {
                        'title':'新趨勢',
                        'url':appUrl+'/view/trend',
                    },
                    {
                        'title':'永續環境',
                        'url':appUrl+'/view/environment',
                    },
                    {
                        'title':'共好社會',
                        'url':appUrl+'/view/society',
                    },
                    {
                        'title':'綠色生活',
                        'url':appUrl+'/view/greelife',
                    },
                ]
            },
            {
                'title':'永續生活小撇步',
                'url':appUrl+'/secret',
                'page_name':'secret',
                'child':[]
            },
            // {
            //     'title':'永續行動',
            //     'url':appUrl+'/action',
            //     'page_name':'action',
            //     'child':[]
            // },
            {
                'title':'共好夥伴',
                'url':appUrl+'/partner',
                'page_name':'partner',
                'child':[]
            },
            {
                'title':'TVBS永續責任',
                'url':appUrl+'/responsibility',
                'page_name':'responsibility',
                'child':[]
            },
    ];
    res.status(200).json(data);
}