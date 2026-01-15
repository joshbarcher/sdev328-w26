import express from 'express';
import infoRouter from './routers/info.routes.js';
import projectRouter from './routers/projects.routes.js';

const app = express();

//use middleware - which responds, rejects, passes along, or otherwise changes requests
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//mount the router
app.use("/api/v1/info", infoRouter);
app.use("/api/v1/projects", projectRouter);

const { PORT, NODE_ENV } = process.env;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
})