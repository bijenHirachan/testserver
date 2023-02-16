const http = require("http")
const fs = require("fs")

const home = fs.readFileSync("./index.html")

const PORT = 4000

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        return res.end(home)
    }
    if(req.url === "/about"){
        return res.end("<h1>ABOUT PAGE</h1>")
    }
    if(req.url === "/contact"){
        return res.end("<h1>CONTACT PAGE</h1>")
    }else{
        return res.end("<h1>404 | PAGE NOT FOUND</h1>")
    }
})

server.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`)
})