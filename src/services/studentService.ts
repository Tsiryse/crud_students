import * as studentRepository from '../repository/studentRepository';
import { Student } from '../models/Student';

export const getAllStudents = () => studentRepository.findAll();

export const getStudentById = (id: number) => studentRepository.findById(id);

export const createStudent = (student: Omit<Student, 'id'>) =>
  studentRepository.create(student);

export const updateStudent = (id: number, student: Partial<Student>) =>
  studentRepository.update(id, student);

export const deleteStudent = (id: number) => studentRepository.remove(id);