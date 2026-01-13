import { Router } from 'express';
import { getAllProjects, getSingleProject } from './../controllers/projects.controller.js'

const router = Router();

router.get("/all", getAllProjects);
router.get("/single", getSingleProject);

export default router;