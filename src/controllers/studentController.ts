import { Request, Response } from 'express';
import * as studentService from '../services/studentService';

export const getAll = async (req: Request, res: Response) => {
  const students = await studentService.getAllStudents();
  res.status(200).json(students);
};

export const getOne = async (req: Request, res: Response) => {
  const student = await studentService.getStudentById(Number(req.params.id));
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.status(200).json(student);
};

export const create = async (req: Request, res: Response) => {
  const student = await studentService.createStudent(req.body);
  res.status(201).json(student);
};

export const update = async (req: Request, res: Response) => {
  const student = await studentService.updateStudent(Number(req.params.id), req.body);
  if (!student) return res.status(404).json({ message: 'Student not found' });
  res.status(200).json(student);
};

export const remove = async (req: Request, res: Response) => {
  const success = await studentService.deleteStudent(Number(req.params.id));
  if (!success) return res.status(404).json({ message: 'Student not found' });
  res.status(204).send();
};