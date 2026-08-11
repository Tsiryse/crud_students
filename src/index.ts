import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import * as studentController from './controllers/studentController';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('CRUD Students');
});

app.get('/students', studentController.getAll);
app.get('/students/:id', studentController.getOne);
app.post('/students', studentController.create);
app.put('/students/:id', studentController.update);
app.delete('/students/:id', studentController.remove);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});