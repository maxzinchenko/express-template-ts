import 'dotenv/config';
import express, { RequestHandler, Router } from 'express';
import { urlencoded, json } from 'body-parser'

import { SERVER_PORT } from './src/constants'

import { Server } from './src/server';
import { StatusRoute } from './src/routes';

const app = express();
const router = Router();

const server = new Server(app, SERVER_PORT);

const statusRoute = new StatusRoute(router);

const globalMiddleware: Array<RequestHandler> = [
  urlencoded({ extended: false }),
  json()
];

server.initDatabase([])
  .then(() => {
    server.loadMiddleware(globalMiddleware);
    server.loadRoutes(router, [statusRoute]);
    server.run();
  })
  .catch(console.error);
