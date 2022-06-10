var http = require("http")


// 把伺服器腳本放進start
function start() {

    // 當你輸入網址後，進入網頁才call這個function
    function onRequset(requeset, response) {
        console.log("Request received")
        if (requeset.url == '/') {
            // 代碼200代表請求成功
            response.writeHead(203, { "Content-type": "text/html" })
            response.write("<h1>This is Home Page.</h1>");

            // 從後端發訊息到前端
            response.end()
        } else if (requeset.url == '/page1'){
            response.writeHead(200, { "Content-type": "text/plain" })
            response.write("Hello Welcome to Page1");
            response.end()
        } else
            response.end('Invalid Request')
    }

    // callback function  listen
    http.createServer(onRequset).listen(8888,()=>{
        console.log("Server has started")
    })

}

start()

// 匯出start
// exports.start = start
