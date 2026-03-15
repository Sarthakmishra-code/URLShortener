import { Router } from "express";
import { createShortUrl, getShortUrl } from "../controllers/shorturl.controller.js";

const router = Router();

router.route('/create').post(createShortUrl)
router.route('/:id').get(getShortUrl)

export default router;