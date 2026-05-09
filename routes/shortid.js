import express from 'express';
import redirectURL from '../controlers/shortid.js';

const router = express.Router();

router.get('/:id', redirectURL); 

export default router;