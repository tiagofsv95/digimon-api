import { Router } from 'express';
import digimonsRouter from './digimons.routes';

const routes = Router();

routes.use('/digimons', digimonsRouter);

export default routes;
