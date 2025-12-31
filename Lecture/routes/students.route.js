//perform crude operation on static array in express - 7 marks
//we want this app variable from index file in this file how??
//2.static array crude operation
import bodyParser from "body-parser";
import { Router } from "express";
//it is your separate router
const routerStudent = Router();
//now instead of app write the object of Router

//Router level middleware
// routerStudent.use((req,res,next)=>{
//     next();
// })

const data = ["st1", "st2", "st3", "st4"];

//only for router level
routerStudent.use(bodyParser.json());

routerStudent.get("/", (req, res) => {
  res.send(data);
}); //bcs  of "/" it is the first priority even if i make faculties.route.js then student will be prioritized to solve it the answer is in index
routerStudent.post("/add", (req, res) => {
  const studentName = req.body.studentName;
  //body.var nu naam j rakhaay kem ke e key chhe of the data you are getting
  data.push(studentName);
  res.send("Student Created!");
});
routerStudent.get("/:id", (req, res) => {
  res.send(data[req.params.id]);
});
routerStudent.put("/edit/:id", (req, res) => {
  const studentName = req.body.studentName;
  data[req.params.id] = studentName;
  res.send("edited");
});
routerStudent.delete("/delete/:id", (req, res) => {
  data.splice(req.params.id, 1);
  res.send("delete world");
});

export default routerStudent;
//at last
