const http = require("http");
var os = require('os') 

const port = 3002;
const server = http.createServer((req, res) => {
  if (req.url === "/checked") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    let alldata = "";
    let dataObj = null;
    req.on("data", function (chunk) {
      alldata += chunk;
      var dataString = alldata.toString();
      const data = JSON.parse(decodeURI(dataString));

      //将接收到的字符串转换位为json对象
      dataObj = data;
      console.log(`${os.userInfo().username}输出：`)
      console.log(dataObj)
    });
    res.statusCode = 200;
    res.end("success");
  }
});

server.listen(port, () => {
  console.log("Server running at http://127.0.0.1:3002/");
});
