let c=9;
console.log(c);
c=10;
console.log(c);
const b=10
console.log(b+c)
var v="Hello"
console.log(v)
let arr=["BMW","Ferrari","Lamborghini","Mercedes","Rolls-Royce"]
console.log(arr)

function add(a,b){
      return a+b
}
module.exports={add}
const math=require("./math);
console.log(math.add(10,15));