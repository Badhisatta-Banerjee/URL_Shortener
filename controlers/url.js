import { nanoid } from 'nanoid';
import URL from '../models/url.js';

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "URL Required" });

    const shortId = nanoid(8);

    await URL.create({
        shortID: shortId,
        redirectURL: body.url,
        visitHistory: []
    });
    return res.redirect(`/?id=${shortId}`);
}

export default handleGenerateNewShortURL;