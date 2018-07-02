"use strict";


var fs = require("fs");
// fs.readFile("img.jpg",function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("图片读取")
//         console.log(data);
//     }
// })
// console.log("123")
// //异步读取文件
// fs.readFile("sample.txt",function (err, data) {
//     if (err) {
//         console.log(err);
//     } else {
//         var text = data.toString("utf-8");
//         console.log(text);
//     }
// })



// //异步文件读取
// var data = fs.readFileSync('sample.txt', 'utf-8');
// console.log(data);
// console.log("sss")

// //写入文件
// var data = "hello.Node.js";
// fs.writeFile("output.txt",data,function (err) {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("ok");
//     }
// })

// //获取文件大小
// console.log("获取文件大小------")
// fs.stat('img.jpg', function (err, stat) {
//     if (err) {
//         console.log(err);
//     } else {
//         // 是否是文件:
//         console.log('isFile: ' + stat.isFile());
//         // 是否是目录:
//         console.log('isDirectory: ' + stat.isDirectory());
//         if (stat.isFile()) {
//             // 文件大小:
//             console.log('size: ' + stat.size);
//             // 创建时间, Date对象:
//             console.log('birth time: ' + stat.birthtime);
//             // 修改时间, Date对象:
//             console.log('modified time: ' + stat.mtime);
//         }
//     }
//     console.log("获取文件大小------end")
// });

var imginfo = fs.statSync('img.jpg');
console.log(imginfo);
















