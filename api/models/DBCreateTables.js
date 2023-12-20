import mysql from 'mysql'
import {DB} from '../Configs/DBConfig.js'

let sqls="CREATE TABLE IF NOT EXISTS Products (id INT AUTO_INCREMENT , title VARCHAR(255), price INT, image VARCHAR(255), CONSTRAINT pk_id PRIMARY KEY (id));";

 async function CreateTabels(){
 DB.query(sqls, (err)=>{

    if(err) throw err;
    return console.log("Tabels Created");;
})
}
export {CreateTabels}

