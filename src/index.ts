import express, {Express, Request, Response} from 'express';
import cors from "cors";
import helmet from "helmet";
import "dotenv/config";
import {ResponseBodyWithoutData} from './entities/response';
import authRouter from './routers/auth.router';
import orderRouter from './routers/order.router';
import cartRouter from './routers/cart.router';
import productRouter from './routers/product.router';
import {connectDB} from './utils/db';

const app: Express = express();
const port = 3001;

app.use(helmet());

app.use(cors());

app.use(express.json());

connectDB()

// Health Check
app.get("/api/v1", (req: Request, res: Response) => {
  res.status(200).send({
    success: true,
    message: "We handle the boring stuff..!",
  } as ResponseBodyWithoutData);
});

// Route handlers
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/auth", orderRouter);
app.use("/api/v1/cart", cartRouter);
app.use("/api/v1/product", productRouter);

// --------------
app.get('/', (req: Request, res: Response) => {
  res.send('We handle the boring stuff..!');
});

app.listen(port, () => {
  console.log(`[Server]: I am running at https://localhost:${port}`);
});