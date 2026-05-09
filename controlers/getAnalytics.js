import URL from '../models/url.js'

async function getAnalytics(req, res) {
    const shortId = req.params.id;
    const result = await URL.findOne({ shortID: shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}

export default getAnalytics;