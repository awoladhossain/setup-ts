import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
router.get('/getAll-student', StudentControllers.getAllStudents);
router.get('/getSingle-student/:id', StudentControllers.getSingleStudent);

export const StudnetRoutes = router;
