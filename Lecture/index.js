const express = require("express");
const { default: routerStudent } = require("./routes/students.route");

const app = express();

//so that whenever route have /student it will show student if  we make another /faculty it will be useful and less confusing
app.use("/student", routerStudent);
//if you want this in whole application
//app.use(bodyParser.json);

//static middleware
app.use("/public", express.static("public")); //why two public bcs one is path and one is specified folder

app.listen(3000, () => {
  console.log("Server started @3000");
});
