import { Router } from "express";
import { testFunc } from "../controllers/test";

const router = Router();

router.get("/health", testFunc);

export default router;
