// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});

var url = require('url');

console.log(url.parse('https://user:pass@host.com:8080/path/to/file?query=string#hash'));

var path = require('path');
// 解析当前目录:
var workDir = path.resolve('.'); // '/Users/michael'

// 组合完整的文件路径:当前目录+'pub'+'index.html':
var filePath = path.join(workDir, 'pub', 'index.html');
// '/Users/michael/pub/index.html'
console.log(filePath);