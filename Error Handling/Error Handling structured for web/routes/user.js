import express from "express";
import { userController } from "../controller/userController.js";

const router = express.Router();

router.get("/new", userController);

export default router;