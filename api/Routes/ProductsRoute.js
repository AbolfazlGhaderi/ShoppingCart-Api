import { Router } from 'express';
export const pRouter = Router();

import {getProducts} from '../Controllers/ProductsController.js'

pRouter.get('/',getProducts)

