import express, {Express, Request, Response} from 'express';
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";

const app: Express = express();
const port = 3000;

app.use(helmet());

app.use(cors());

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, this is Express + TypeScript');
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});