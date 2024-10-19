import { Request, Response } from 'express';
import { StudentServicesController } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const studentData = req.body;

    const result =
      await StudentServicesController.createStudnetIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully !!',
      data: result,
    });
  } catch (error) {
    console.log('Error in createStudent', error);
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
}




export const StudentControllers = {
  createStudent,
  getAllStudents,
};
