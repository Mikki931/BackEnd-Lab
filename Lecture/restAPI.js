const express = require("express");
//mongoose is orm
const mongoose = require("mongoose");
const Lecture = require("./models/Lecture");

const app = express();

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://mikki0931:160906mikki@cluster0.80vppql.mongodb.net/rms"
  )
  .then(() => {
    app.get("/home", (req, res) => {
      res.send("Welcome");
    });

    //async and await comes in pair
    app.get("/users", async (req, res) => {
      const data = await Lecture.find();
      res.send(data);
    });

    // app.get("/users/emailverified/:status", async (req, res) => {
    //   const data = await Lecture.find({isemailverified:req.params.status});
    //   res.send(data);
    // });

    app.get("/users/:id", async (req, res) => {
      const data = await Lecture.findOne({ _id: req.params.id });
      res.json(data);
    });

    app.delete("/users/:id", async (req, res) => {
      const data = await Lecture.deleteOne({ _id: req.params.id });
      res.json(data);
    });

    app.post("/adduser", async (req, res) => {
      const data = new Lecture(req.body);
      const ans = await data.save();
      // console.log(req.body); // it only works if you have written the line(app.use(express.json()))
      res.send(ans);
    });

    app.put("/users/:id", async (req, res) => {
      const ans = await Lecture.findByIdAndUpdate(req.params.id, req.body);
      res.send(ans);
    });

    app.listen(3000, () => {
      console.log("Server Started @3000");
    });
  });

//step 1: install dependencies: express,mongoose
//step 2:
