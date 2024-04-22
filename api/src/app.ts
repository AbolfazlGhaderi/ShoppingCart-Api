import express,{ Application } from "express";


const application : Application = express()

application.disable("x-powered-by");


export default application