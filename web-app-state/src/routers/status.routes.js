import express from "express";

const router = express.Router();

// HTML status page
router.get("/status", (req, res) => {
    res.render("status", {
        theme: req.theme,
        bodyClass: req.bodyClass,
        themeClicks: req.themeClicks,
        cookies: req.cookies || {},
        session: req.session || {}
    });
});

// JSON endpoint
router.get("/api/status.json", (req, res) => {
    res.json({
        cookies: req.cookies || {},
        session: req.session || {}
    });
});

export default router;