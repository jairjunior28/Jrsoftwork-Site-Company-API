import express from 'express'
import routes from './routes';
import { errors } from 'celebrate';
import cors from 'cors';
import * as bodyParser from "body-parser";

const app= express();
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded());deprecated
app.use(bodyParser.json());
app.use(routes);
app.use(errors);

export default app;
