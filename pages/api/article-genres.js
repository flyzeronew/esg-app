export default function handler(req, res) {
    const data = [
            {
                "id": 1,
                "name": "新趨勢",
                "en_name": "trend",
                "description":"ESG企業永續治理已成為企業不可忽視的趨勢及課題。企業唯有積極實踐 ESG 理念，才能在永續發展的浪潮中立於不敗之地。",
            },
            {
                "id": 2,
                "name": "永續環境",
                "en_name": "environment",
                "description":"企業透過節能減碳、循環經濟、綠色製造等措施，創造永續環境為減緩氣候變遷、保護環境做出貢獻。企業的永續環境措施也可以為企業帶來正面效益。例如提升企業形象、降低營運成本、提升競爭力。",
            },
            {
                "id": 3,
                "name": "共好社會",
                "en_name": "society",
                "description":"ESG企業透過重視勞工權益、供應鏈管理、社區回饋等議題，可以為社會帶來正面效益。企業的共好社會措施也可以帶來正面效益。透過共好社會措施來提升企業形象、增強企業凝聚力、提升品牌價值。",
            },
            {
                "id": 4,
                "name": "綠色生活",
                "en_name": "greenlife",
                "description":"ESG企業透過倡導綠色消費、低碳生活等理念，可以為環境保護做出貢獻。ESG企業的綠色生活理念帶來正面效益。透過綠色生活理念來提升企業形象、拓展市場機會、提升品牌價值。",
            }
        ];
    res.status(200).json(data);
}

