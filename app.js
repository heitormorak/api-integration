import express from "express";
import routes from "./routes/index.js";

const server = express();
const PORT = 4000;

server.use(express.json());

server.use(routes)

try{
    server.listen(PORT, () => {
        console.log(`Server started on port: ${PORT}`);
    })
} catch (error){
    console.log(`Error: ${error}`);
}
