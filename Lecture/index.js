const express = require("express");
const {
  default: routerStudent,
} = require("./controllers/routes/students.route");

const app = express();

//so that whenever route have /student it will show student if  we make another /faculty it will be useful and less confusing
app.use("/student", routerStudent);
//if you want this in whole application
//app.use(bodyParser.json);

app.listen(3000, () => {
  console.log("Server started @3000");
});
