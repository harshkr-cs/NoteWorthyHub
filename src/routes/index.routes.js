import { Router } from "express";
import { renderIndex, renderAbout,renderSnake ,renderport} from "../controllers/index.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/snake", renderSnake);
router.get("/portfolio", renderport);

export default router;
