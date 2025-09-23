export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { nextUrl } = req.body;
        
        if (!nextUrl) {
            return res.status(400).json({ error: 'Next URL is required' });
        }

        // 直接使用 Instagram API 提供的 next URL
        const response = await fetch(nextUrl);
        
        if (!response.ok) {
            throw new Error(`Instagram API error: ${response.status}`);
        }

        const data = await response.json();
        
        // 回傳下一頁的資料
        res.status(200).json(data);
        
    } catch (error) {
        console.error('Instagram next page API error:', error);
        res.status(500).json({ 
            error: 'Failed to fetch next page',
            message: error.message 
        });
    }
}
