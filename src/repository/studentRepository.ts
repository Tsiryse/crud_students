import { pool } from '../db';
import { Student } from '../models/Student';

export const findAll = async (): Promise<Student[]> => {
  const result = await pool.query('SELECT * FROM students');
  return result.rows;
};

export const findById = async (id: number): Promise<Student | null> => {
  const result = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
  return result.rows[0] || null;
};

export const create = async (student: Omit<Student, 'id'>): Promise<Student> => {
  const result = await pool.query(
    'INSERT INTO students (name, sex, score) VALUES ($1, $2, $3) RETURNING *',
    [student.name, student.sex, student.score]
  );
  return result.rows[0];
};

export const update = async (id: number, student: Partial<Student>): Promise<Student | null> => {
  const result = await pool.query(
    'UPDATE students SET name = $1, sex = $2, score = $3 WHERE id = $4 RETURNING *',
    [student.name, student.sex, student.score, id]
  );
  return result.rows[0] || null;
};

export const remove = async (id: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM students WHERE id = $1', [id]);
  return (result.rowCount ?? 0) > 0;
};