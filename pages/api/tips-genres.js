export default function handler(req, res) {
    const data = [
        {
          "id": 1,
          "name": "食",
          "en_name": "food",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
        {
          "id": 2,
          "name": "衣",
          "en_name": "clothing",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
        {
          "id": 3,
          "name": "住",
          "en_name": "housing",
          "created_at": "2024-01-25T14:23:06.000000Z",
          "updated_at": "2024-01-25T14:23:06.000000Z"
        },
        {
            "id": 4,
            "name": "行",
            "en_name": "transport",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
        },
        {
            "id": 5,
            "name": "育",
            "en_name": "education",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
        },
        {
            "id": 6,
            "name": "樂",
            "en_name": "entertainment",
            "created_at": "2024-01-25T14:23:06.000000Z",
            "updated_at": "2024-01-25T14:23:06.000000Z"
        }
      ];
    res.status(200).json(data);
}

