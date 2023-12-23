import { Router } from 'express';
export const oRouter = Router();

import { getOrderDetailsById, postOrder} from '../Controllers/OrdersContrpller.js'



oRouter.get('/:id',getOrderDetailsById)

oRouter.post('/',postOrder)