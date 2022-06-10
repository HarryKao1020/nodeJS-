var http = require("http")
const fs = require("fs")

const sendResponse = (filename, statusCode, response) => {
    fs.readFile(`./${filename}`, (error, data) => {
        if (error) {
            response.statusCode = 500;
            response.setHeader("Content-Type", "text/plain")
            response.end("Sorry, internal error")
        } else {
            response.statusCode = statusCode
            response.setHeader("Content-Type", "text/html")
            response.end(data)
        }
    });
}

function onRequset(req, res) {
    console.log(req.url, req.method)

    const method = req.method
    const url = req.url

    // 造訪頁面
    if (method === "GET") {
        if (url === "/") {
            sendResponse("index.html", 200, res)
        } else if (url === "/about.html") {
            sendResponse("about.html", 200, res)
        } else {
            sendResponse("error.html", 404, res)
        }
        // res.end("Hello From NodeJS Server2")
    }else{

    }
}

const port = 3000;
const ip = "127.0.0.1"

http.createServer(onRequset).listen(port, ip, () => {
    console.log(`Server2 is running at http://${ip}:${port}`)
})