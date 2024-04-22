import application from './app';
import http from 'http';


const server = http.createServer(application)
const port = process.env.APP_PORT || 4020


async function bootStrap() : Promise<void> {

    try{
        server.listen(port,()=>{
            console.log(`server is starting on http://localhost:${port}`);

        })
    }
    catch(err){
        // logger
        process.exit(1);
    }
}

bootStrap()