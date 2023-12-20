import express from 'express'
import cors from 'cors'
import {pRouter} from './Routes/ProductsRoute.js'
import {oRouter} from './Routes/OrdersRoute.js'
import path from 'path'
import {DB} from './Configs/DBConfig.js'
import {CreateTabels} from './models/DBCreateTables.js'
const app = express();

app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join("images")));

app.use('/products',pRouter)
app.use('/orders',oRouter)


DB.connect( async (err) => {
    if (err) throw err
    console.log('Database Connected')
    app.listen(3000, () => {
        console.log('Server is Running on port 3000')
    })
    CreateTabels();    


})




