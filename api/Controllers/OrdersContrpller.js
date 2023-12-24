import { customAlphabet } from 'nanoid'
import { DB } from '../Configs/DBConfig.js';

const numberNanoid = customAlphabet('1234567890', 12)

export function getOrderByID(req, res) {
    // ---------- Get Id ----------------------------------------
    const id = req.params.id;

    // ----------- Select Order Details From DB ------------------
    let sql = `SELECT * FROM orders WHERE order_id=${id}`
    DB.query(sql, (err, result) => {
        
        // ---------------- if there was an error ----------------
        if (err) {
            res.status(500).json({ msg: "ERROR To Get Order Detailes" })
        }
        // ----------------  if there is no error ----------------
        res.status(200).json({ data: result })
    })

}

export function postOrder(req, res) {
    // -------- Create a Order ID --------------------------------------

    const orderId = numberNanoid();

    // -------- today's Date And Time-----------------------------------
    let date = new Date().toISOString();
    date=date.split('.',1)
    date=date.toString().replace('T',' ')

    //--------- Save Order And OrdrtDetails to DB -----------------------------------


    let sql = "INSERT INTO `orders`  VALUES(?,?,?,?)";
    DB.query(sql, [orderId, `${date}`, req.body.price, req.body.total], (err, result) => {

        //----------- If there was an error ------------------------------
        if (err) {
            res.status(500).json({ msg: "ERROR Save Order" })
            throw err
        }

        //---------------- Creating the necessary values for storage (Detailes) -------------
        let orderDetailValue = ''
        req.body.items.map(item => {
            orderDetailValue += `(${orderId},${item.product_id}),`

        })
        orderDetailValue = orderDetailValue.slice(0, orderDetailValue.length - 1);
        

        //----------- Save Order Details to DB ---------------------------------------------------

        let sql = `INSERT INTO order_detail (order_fk,product_fk)  VALUES${orderDetailValue}`;
        DB.query(sql, (err, result) => {

            //----------- If there was an error ------------------------------
            if (err) {
                res.status(500).json({ msg: "ERROR Save Order Detail " })
                throw err
            }

            //--------------------------
            res.status(201).json({ msg: "Ok / The order was registered! ", url: `/success?orderID=${orderId}` })
        })

    })



}

