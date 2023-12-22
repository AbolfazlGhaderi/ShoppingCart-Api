import express from 'express'
import cors from 'cors'
import {pRouter} from './Routes/ProductsRoute.js'
import {oRouter} from './Routes/OrdersRoute.js'
import path from 'path'
import {DB} from './Configs/DBConfig.js'
import {CreateTabels} from './models/DBCreateTables.js'
const app = express();

//------ Middlewares -----------

app.use(cors());
app.use(express.json());

// ------------ Statics ------------

app.use('/images', express.static(path.join("images")));

// ----- Routes --------------
app.use('/products',pRouter)
app.use('/orders',oRouter)


// ---------- connect to DB And Running the server --------------------

DB.connect( async (err) => {
   //----------- If there was an error -------------------
    if (err) throw err

   //----------- If there is no error -------------------
    console.log('Database Connected')
    app.listen(3000, () => {
        console.log('Server is Running on port 3000')
    })
   //----------- Create tables  ----------------
    CreateTabels();  

})




