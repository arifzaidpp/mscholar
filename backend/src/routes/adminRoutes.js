import express from "express";
import { checkIdParam } from "../middleware/editDetails.js";
import { addCourse, deleteCourse, editCourse, getAllUsers } from "../controllers/courseController.js";

const router = express.Router();

router.post('/add-course', addCourse);
router.put('/edit-course/:id', checkIdParam, editCourse);
router.delete('/delete-course/:id', checkIdParam, deleteCourse);
router.get('/users', getAllUsers);

export default router;