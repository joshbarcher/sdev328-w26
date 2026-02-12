import express from 'express';
import router from './routers/games.routes.js';
import cors from 'cors';

//configure Express.js app
const app = express();

//enable cors so we can make requests from other origins
app.use(cors());

//view engine
app.set("view engine", "ejs");
app.set("views", "src/views");

//static directories
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routers (shared path of /api/v1/games)
app.use("/api/v1/games", router);

export default app;