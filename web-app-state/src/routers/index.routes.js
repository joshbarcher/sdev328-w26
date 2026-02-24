import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("index", {
        theme: req.theme,
        bodyClass: req.bodyClass,
        themeClicks: req.themeClicks
    });
});

export default router;