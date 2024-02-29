export default function handler(req, res) {
    const data = [
        {
            "id": 1,
            "name": "新趨勢",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
            },
            {
            "id": 2,
            "name": "永續環境",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
            },
            {
            "id": 3,
            "name": "共好社會",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
            },
            {
            "id": 4,
            "name": "綠色生活",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
            }
        ];
    res.status(200).json(data);
}

