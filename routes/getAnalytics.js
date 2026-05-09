import express from 'express'
import getAnalytics from '../controlers/getAnalytics.js'

const router=express.Router();

router.get('/:id',getAnalytics);

export default router;