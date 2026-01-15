import { Router } from 'express';
import { getAllProjects, getSingleProject, getTechRelated } from './../controllers/projects.controller.js'

const router = Router();

router.get("/all", getAllProjects);

//these use query strings
//router.get("/single", getSingleProject);
//router.get("/single/tech", getTechRelated);

//these use path parameters
router.get("/single/:title", getSingleProject);
router.get("/single/tech/:tech", getTechRelated);

export default router;