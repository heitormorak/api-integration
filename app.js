import express from "express";
import router from './src/routers/index.js'

const server = express();
const PORT = 4000;

server.use(express.json());
server.use(router)

try{
    server.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    })
} catch (error){
    console.log(`Error: ${error}`);
}
