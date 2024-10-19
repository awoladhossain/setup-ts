import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudnetIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  // const result = await StudentModel.findById({ _id: id });
  // const result = await StudentModel.findById(id);
  // * If you want to find by id of the student not mongodb id then use it
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServicesController = {
  createStudnetIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
