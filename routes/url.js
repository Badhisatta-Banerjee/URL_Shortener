import express from 'express'
import handelGenerateNewShortURL from '../controlers/url.js'

const router = express.Router();

router.post('/', handelGenerateNewShortURL);

export default router;