import express from "express";
import path from "path";
import cookieParser from 'cookie-parser';
import session from 'express-session';

import indexRoutes from "./routers/index.routes.js";
import stateRoutes from "./routers/state.routes.js";
import multiFormRoutes from "./routers/form.routes.js";
import statusRoutes from "./routers/status.routes.js";
import dotenv from 'dotenv';

//read environment variables
dotenv.config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true, //no access on the front-end
        maxAge: 20 * 60 * 1000 //20 minutes
    }
}));

//middleware to attach cookie values 
app.use((req, res, next) => {
    req.theme = req.cookies.theme || "light";
    req.bodyClass = req.theme === "dark" ? "dark" : "light";
    next();
})

app.use(indexRoutes);
app.use(stateRoutes);
app.use(multiFormRoutes);
app.use(statusRoutes);

export default app;