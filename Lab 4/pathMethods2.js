const path = require("path");

ans=path.join("users", "arjun", "documents", "project");

console.log(ans);

ans=path.normalize("//folder//subfolder////file.txt");

console.log(ans);

ans=path.resolve("folder", "subfolder", "app.js");

console.log(ans);

ans=path.isAbsolute("C:/Users/User/Documents/report.txt");

console.log(ans);