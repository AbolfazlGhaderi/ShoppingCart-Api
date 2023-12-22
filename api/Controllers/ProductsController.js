import { DB } from '../Configs/DBConfig.js'


export function getProducts(req, res) {
    //----------- Get All Product ----------------
    let sql = "SELECT * FROM Products"

    DB.query(sql, (err, result) => {
        
        //----------- If there was an error ----------------
        if (err) throw err

        //----------- If there is no product ----------------
        if (result.length == 0) return res.status(200).json(JSON.stringify({ "msg": "No Products Found | Post/ Products" }))

        //----------- If there is product ----------------
        res.status(200).json(JSON.stringify(result))
    })

}