import express from "express";
// import { checkIdParam } from "../middleware/editDetails.js";
import { getAllCourses } from "../controllers/courseController.js";

const router = express.Router();

router.get('/courses', getAllCourses);

export default router;