let http = require("http");
let url = require("url");
let util = require("util");
let fs = require("fs");
let server = http.createServer((req, res) => {
  const pathName = url.parse(req.url).pathname.substring(1);
  fs.readFile(pathName, (err, data) => {
    if (data) {
      res.writeHeader(200, {
        "Content-Type": "text/html; charset=utf-8"
      });
      res.write(data.toString());
    } else {
      res.writeHeader(404, {
        "Content-Type": "text/html; charset=utf-8"
      });
    }
    res.end("");
  });
});
server.listen(3000, "0.0.0.0", () => {
  console.log("服务器已经运行");
});
