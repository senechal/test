import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes';

export const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const router = express.Router();
routes(router);

app.use('/api', router);