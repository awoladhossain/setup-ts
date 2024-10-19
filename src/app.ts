import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudnetRoutes } from './app/modules/student/student.route';

const app: Application = express();

// * parser
app.use(express.json());
app.use(cors());

// * application router

app.use('/api/v1/students', StudnetRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('awolad');
});

// console.log(process.cwd())

export default app;
