import URL from '../models/url.js';

async function redirectURL(req, res) {
    const shortid = req.params.id;

    const entry = await URL.findOneAndUpdate(
        { shortID: shortid },
        { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    
    if (!entry) return res.status(404).json({ error: "Short URL not found" });
    res.redirect(entry.redirectURL);
}

export default redirectURL;