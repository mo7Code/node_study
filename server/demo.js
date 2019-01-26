const User = require("./User.js");
console.log(`I'm ${User.userName},I say ${User.sayHello()}`);

//
let http = require("http");
let url = require("url");
let util = require("util");
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  console.log(req.url);
  console.log(url.parse(req.url));
  console.log(util.inspect(url.parse(req.url)));
  res.end(util.inspect(url.parse(req.url)));
});
server.listen(3000, "0.0.0.0", () => {
  console.log("服务器已经运行");
});
