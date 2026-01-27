import { Router } from "express";
import * as ctl from './../controllers/games.controller.js';

const router = Router();

router.get("/", ctl.allGames);
router.get("/game", ctl.gameById);

export default router;