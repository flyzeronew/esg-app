export default function handler(req, res) {
    // const appUrl = process.env.APP_URL;
    const data = [ 
            {
                'title':'未來焦點',
                'url':'/focus',
                'page_name':'focus',
                'child':[]
            },
            {
                'title':'永續觀點',
                'url':'/view',
                'page_name':'view',
                'child':[
                    {
                        'title':'全部',
                        'url':'/view',
                    },
                    {
                        'title':'新趨勢',
                        'url':'/view/trend',
                    },
                    {
                        'title':'人物專訪',
                        'url':'/view/interviews',
                    },
                    {
                        'title':'永續環境',
                        'url':'/view/environment',
                    },
                    {
                        'title':'共好社會',
                        'url':'/view/society',
                    },
                    {
                        'title':'綠色生活',
                        'url':'/view/greenlife',
                    },
                    {
                        'title':'時尚美妝',
                        'url':'/view/beauty',
                    },
                ]
            },
            {
                'title':'永續生活小撇步',
                'url':'/tips',
                'page_name':'tips',
                'child':[]
            },
            // {
            //     'title':'永續行動',
            //     'url':'/action',
            //     'page_name':'action',
            //     'child':[]
            // },
            {
                'title':'共好夥伴',
                'url':'/partner',
                'page_name':'partner',
                'child':[]
            },
            {
                'title':'TVBS永續責任',
                'url':'/responsibility',
                'page_name':'responsibility',
                'child':[
                    {
                        'title':'全部',
                        'url':'/responsibility',
                    },
                    {
                        'title':'永續影響力報告',
                        'url':'/responsibility/reports',
                    },
                ]
            },
    ];
    res.status(200).json(data);
}