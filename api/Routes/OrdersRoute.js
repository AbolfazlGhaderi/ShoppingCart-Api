import { Router } from 'express';
export const oRouter = Router();

import { getOrderByID, postOrder} from '../Controllers/OrdersContrpller.js'



oRouter.get('/:id',getOrderByID)

oRouter.post('/',postOrder)