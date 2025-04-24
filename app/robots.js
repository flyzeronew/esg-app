export default function robots() {
    if ('production' === process.env.APP_ENV) {
        return {
            rules: [
                {
                    userAgent: '*',
                    allow: ['/'],
                },
                {
                    userAgent: ['Amazonbot', 'GPTBot', 'Claude', 'ClaudeBot'],
                    disallow: ['/'],
                },
            ],
            sitemap: 'https://esg.tvbs.com.tw/sitemap.xml',
            host: ' https://esg.tvbs.com.tw'
        }
    } else {
        return {
            rules: [
                {
                    userAgent: ['*'],
                    disallow: ['/'],
                },
            ]
        }
    }

}