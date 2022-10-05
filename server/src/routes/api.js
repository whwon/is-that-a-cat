import express from 'express';
const apiRouter = express.Router();
import { search } from '../controllers/theCatApi.js';

apiRouter.route('/search').post(search);

export { apiRouter };