import { customAlphabet } from 'nanoid'
import { DB } from '../Configs/DBConfig.js';

const numberNanoid = customAlphabet('1234567890', 12)
export function getOrders(req, res) {

    res.status(200).json({ "msg": "OK / Orders" })
}


export function postOrder(req, res) {
    // -------- Create a Order ID -----------------

    const orderId = numberNanoid();

    // -------- today's date -----------------
    const date = new Date()
    const nowDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()

    //--------- Add order to database --------------

    let sql = "INSERT INTO `orders` (order_id,create_date,total_amount, total) VALUES(?,?,?,?)";
    DB.query(sql, [orderId, `${nowDate}`, req.body.price, req.body.total], (err, result) => {
        //----------- If there was an error -------------------
        if (err) {
            res.status(500).json({ msg: "ERROR" })
            console.log(sql);
            throw err
        }
        //----------- If there is no error -------------------

        console.log(result);
        res.status(201).json({ msg: "Ok / The order was registered! ", url: `/success?orderID=${orderId}` })
    })



}