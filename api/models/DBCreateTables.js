
import { DB } from '../Configs/DBConfig.js'


//----------- Create  tables  ----------------

async function CreateTabels() {

    //----------- create table Products -----------------------------------

    let sql = "CREATE TABLE IF NOT EXISTS `Products` (product_id INT AUTO_INCREMENT , title VARCHAR(255) NOT NULL, price INT NOT NULL, image VARCHAR(255) , CONSTRAINT pk_product_id PRIMARY KEY (product_id));";
    DB.query(sql, (err) => {
        //----------- If there was an error -------------------------------
        
        if (err) throw err;

        //----------- create table orders ---------------------------------

        let sql="CREATE TABLE IF NOT EXISTS `orders` (order_id INT unique NOT NULL,create_date date, total_amount INT NOT NULL, Total int NOT NULL, CONSTRAINT pk_order_id PRIMARY KEY (order_id));"
        DB.query(sql, (err) => {
            if (err) throw err;
           
        })
        // ----------- Create table order_detail --------------------------

        let sql2="CREATE TABLE IF NOT EXISTS order_detail (id INT AUTO_INCREMENT ,order_fk INT NOT NULL, product_fk INT NOT NULL, CONSTRAINT pk_order_detail PRIMARY KEY (id),CONSTRAINT fk_order_id FOREIGN KEY (order_fk) REFERENCES orders(order_id), CONSTRAINT fk_product_id FOREIGN KEY (product_fk) REFERENCES Products(product_id));"
        DB.query(sql2, (err) => {
            if (err) throw err;
            
        })
        return console.log("Tabels Created");

    })
}
export { CreateTabels }

