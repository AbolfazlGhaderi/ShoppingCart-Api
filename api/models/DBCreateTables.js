
import {DB} from '../Configs/DBConfig.js'


//----------- Create a table of products ----------------

let sqls="CREATE TABLE IF NOT EXISTS Products (id INT AUTO_INCREMENT , title VARCHAR(255), price INT, image VARCHAR(255), CONSTRAINT pk_id PRIMARY KEY (id));";
 async function CreateTabels(){
 DB.query(sqls, (err)=>{
    //----------- If there was an error ----------------
    if(err) throw err;

    //----------- If there is no error ----------------
    return console.log("Tabels Created");;
})
}
export {CreateTabels}

