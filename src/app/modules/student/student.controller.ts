import { Request, Response } from 'express';
import { StudentServicesController } from './student.service';
import Joi from 'joi';

const createStudent = async (req: Request, res: Response) => {
  try {
    // Joi validation

    const JoiValidationSchema = Joi.object({
      id: Joi.string().required(),
      name: {
        firstName: Joi.string().max(20).required(),
        middlesName: Joi.string().max(20),
        lastName: Joi.string().max(20).required(),
      },
      gender: Joi.string().required().valid(['Male', 'Female', 'Other']),
    });

    const studentData = req.body;

    const result =
      await StudentServicesController.createStudnetIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully !!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Student failed to Create !!',
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServicesController.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students fetched successfully !!',
      data: result,
    });
  } catch (error) {
    console.log('Error in getAllStudents', error);
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    //* Get student id from request params and its monogoDB id
    const studentId = req.params.id;
    const result =
      await StudentServicesController.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student fetched successfully !!',
      data: result,
    });
  } catch (error) {
    console.log('Error in getSingleStudent', error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
