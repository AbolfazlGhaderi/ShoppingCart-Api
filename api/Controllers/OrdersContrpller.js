import { customAlphabet } from 'nanoid'
import { DB } from '../Configs/DBConfig.js';

const numberNanoid = customAlphabet('1234567890', 12)
export function getOrders(req, res) {

    res.status(200).json({ "msg": "OK / Orders" })
}


export function postOrder(req, res) {
    // -------- Create a Order ID --------------------------------------

    const orderId = numberNanoid();

    // -------- today's Date And Time-----------------------------------
    const date = new Date()
    const nowDate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()
    const nowTime = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

    //--------- Save Order to DB -----------------------------------


    let sql = "INSERT INTO `orders`  VALUES(?,?,?,?,?)";
    DB.query(sql, [orderId, `${nowDate}`, `${nowTime}`, req.body.price, req.body.total], (err, result) => {

        //----------- If there was an error ------------------------------
        if (err) {
            res.status(500).json({ msg: "ERROR Save Order" })
            console.log(sql);
            throw err
        }

        //---------------- Creating the necessary values for storage -------------
        let orderDetailValue =''
        req.body.items.map(item=>{
            orderDetailValue+=`(${orderId},${item.product_id}),`
            
        })
        orderDetailValue=orderDetailValue.slice(0,orderDetailValue.length-1);
        console.log(orderDetailValue);
        //----------- Save Order Detail to DB ---------------------------------------------------
        let sql = `INSERT INTO order_detail (order_fk,product_fk)  VALUES${orderDetailValue}`;
        DB.query(sql,(err, result) => {

            //----------- If there was an error ------------------------------
            if (err) {
                res.status(500).json({ msg: "ERROR Save Order Detail " })
                console.log(sql);
                throw err
            }

            //----------- Save Order Detail to DB ---------------------------------------------------

            res.status(201).json({ msg: "Ok / The order was registered! ", url: `/success?orderID=${orderId}` })
        })

    })



}