import http from "http";

const nav="<h1> <a href='/'>Welcome</a> | <a href='/home'>Home</a> | <a href='/about'>About</a> </h1>";

const server=http.createServer((req,res)=>{
    let status=req.url==="/"||req.url==="/home"||req.url==="/about"
    ?200
    :404;

    res.writeHead(status,{
        "Content-Type":"text/html"
    });

    let content;

    if(req.url==="/")
        content="<h1>Welcome to My College</h1> ";
    else if(req.url==="/home")
        content="<h1>Home Page</h1>";
    else if(req.url==="/about")
        content="<h1>About Computer Science Department.</h1>";
    else
        content="<h1>404 Page Not Found</h1>";

    res.end(nav+content);
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});
