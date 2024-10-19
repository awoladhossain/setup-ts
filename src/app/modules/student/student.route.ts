import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
router.get('/getAll-student', StudentControllers.getAllStudents);

export const StudnetRoutes = router;