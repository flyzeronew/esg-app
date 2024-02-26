export default function handler(req, res) {
    const data = [
        {
            "id": 0,
            "partner_genre_id": 0,
            "name": "string",
            "avatar": "string",
            "brief": "string",
            "introduction": "string",
            "status": 0,
            "exposed_at": "string",
            "finished_at": "string",
            "cover_img": "string",
            "video_title": "string",
            "video_url": "string",
            "video_cover_url": "string",
            "related_article_ids": "string",
            "created_at": "string",
            "updated_at": "string",
            "partner_genre": {
              "id": 0,
              "name": "string",
              "created_at": "string",
              "updated_at": "string"
            },
            "partner_links": [
              {
                "id": 0,
                "partner_id": 0,
                "position": 0,
                "link_title": "string",
                "link_type": 0,
                "link_url": "string",
                "image_url": "string",
                "created_at": "string",
                "updated_at": "string"
              }
            ],
            "partner_pages": [
              {
                "id": 0,
                "partner_id": 0,
                "section_order": 0,
                "title": "string",
                "content": "string",
                "created_at": "string",
                "updated_at": "string"
              }
            ]
          }
        ];
    res.status(200).json(data);
}