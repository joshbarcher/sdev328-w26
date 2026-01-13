import express from 'express';
import { landingInfo, contactInfo } from '../controllers/info.controller.js';

const router = express.Router();

router.get("/", landingInfo);
router.get("/contact", contactInfo);

export default router;