export default function handler(req, res) {
    const appUrl = process.env.APP_URL;
    const data = {'code':200};
    res.status(200).json(data);
}