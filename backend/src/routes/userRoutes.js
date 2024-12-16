import express from "express";
import { getAllCourses } from "../controllers/courseController.js";
import { updateImage } from "../controllers/userController.js";
import upload from '../utils/multer.js';

const router = express.Router();

router.get('/courses', getAllCourses);
router.post('/update-image', upload.single('avatar'), updateImage);

export default router;