const basepath="https://nodejs.org/api/";
const relative="index.js";

const newUrl=new URL(relative,basepath);
console.log(newUrl.href);

const path="/mypath";

newUrl.append(path);