const querystring = require('querystring');

let one = querystring.stringify({
    name:"scott",
    course:["jade",'node'],
    from:""
})
// console.log(one);
//  name=scott&course=jade&course=node&from=

let two = querystring.stringify({
    name:"scott",
    course:["jade",'node'],
    from:""
},',')
// console.log(two);
//  name=scott,course=jade,course=node,from=

let three = querystring.stringify({
    name:"scott",
    course:["jade",'node'],
    from:""
},',',":")
// console.log(three);
//  name:scott,course:jade,course:node,from:

let four = querystring.parse(
    'name=scott&course=jade&course=node&from=',
    "分割符号 [,]", //参数说明
    "分隔符好 [=]", //参数说明
    "个数限制"  //参数说明
)
// console.log(four);
console.log( 
    querystring.escape('<哈哈>') 
)   //转译 '%3%5...'

console.log( 
    querystring.unescape('%3C%E5%93%88%E5%93%88%3E') 
)   //转译 '%3%5...'
