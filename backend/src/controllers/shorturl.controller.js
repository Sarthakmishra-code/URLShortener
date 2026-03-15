import { nanoid } from "nanoid";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ShortUrl from "../models/shorturl.model.js";
import {ApiResponse} from "../utils/ApiResponse.js";

const createShortUrl = asyncHandler(async (req, res) => {
    const { originalUrl } = req.body;
    const shortUrl = nanoid(8);

    if(!shortUrl){
        throw new ApiError(500, "Failed to generate short URL");
    }

    const newUrl = new ShortUrl({
        originalUrl: originalUrl,
        ShortUrl: shortUrl,
    });

    await newUrl.save();
    res.status(201).json(
        new ApiResponse(201, newUrl, "Short URL created successfully")
    );
})

const getShortUrl = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const url = await ShortUrl.findOneAndUpdate({ ShortUrl: id }, { $inc: { clicks: 1 } });

    if (!url) {
        throw new ApiError(404, "Short URL not found");
    }
    res.redirect(url.originalUrl);
});

export { createShortUrl, getShortUrl };