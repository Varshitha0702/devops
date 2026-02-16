const math = require("./mathmodule");
console.log(math.add(10, 5));
console.log(math.sub(10, 5));


const message = require("./msgmod");
console.log(message());


const config = require("./config");
console.log(config.appName);
console.log(config.version);

const calc = require("./calculator");
console.log(calc.mul(4, 5));
console.log(calc.div(20, 4));