const path = require('path');

const ans=path.resolve("./darshan.txt");

const directory=path.dirname("./Mine/darshan.txt");

const file=path.basename("./darshan.txt");

const extension=path.extname("./darshan.txt");

console.log("full path:",ans);
console.log("Directory name:",directory);
console.log("file name:",file);
console.log("Extension:",extension);