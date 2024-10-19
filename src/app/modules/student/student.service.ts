import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudnetIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
}

export const StudentServicesController = {
  createStudnetIntoDB,
  getAllStudentsFromDB,
};
