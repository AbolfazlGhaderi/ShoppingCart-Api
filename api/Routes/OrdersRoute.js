import { Router } from 'express';
export const oRouter = Router();

import {getOrders} from '../Controllers/OrdersContrpller.js'



oRouter.get('/',getOrders)