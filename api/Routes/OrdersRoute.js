import { Router } from 'express';
export const oRouter = Router();

import {getOrders, postOrder} from '../Controllers/OrdersContrpller.js'



oRouter.get('/',getOrders)

oRouter.post('/',postOrder)