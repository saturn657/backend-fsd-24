//Create my own server using HTTP Module
import http from "http";
const server=http.createServer((req,res)=>{

res.writeHead(200,{"content-type":"text/html"});
res.write("<h1> My server </h1>");
res.write("Welcome to my server");

    res.end();
})
server.listen(8000,()=>{
    console.log("server is running on port 8000");
})