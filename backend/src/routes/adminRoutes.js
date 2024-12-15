import express from "express";
import { checkIdParam } from "../middleware/editDetails.js";
import { addCourse, deleteCourse, editCourse, getAllCourses } from "../controllers/courseController.js";

const router = express.Router();

router.post('/add-course', addCourse);
router.put('/edit-course/:id', editCourse);
router.delete('/delete-course/:id', checkIdParam, deleteCourse);

export default router;