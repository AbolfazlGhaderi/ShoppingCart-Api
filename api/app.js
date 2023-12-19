import express from 'express'
import cors from 'cors'
import {pRouter} from './Routes/ProductsRoute.js'
import {oRouter} from './Routes/OrdersRoute.js'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/products',pRouter)
app.use('/orders',oRouter)

app.listen(3000,console.log("Server is Runnig on Port 3000"))


