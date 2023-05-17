import express, {Application}  from "express";
import cors from 'cors';
import morgan from 'morgan'
import ecomerce from './routes/ecomerce';

const PORT = 3000
const app: Application = express();

app.use(cors());
app.listen(PORT, () => console.log(`Server on port ${PORT}`));

app.use(express.json());
app.use(morgan('dev'));

app.use(ecomerce);

export default app;

