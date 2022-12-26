const express = require("express");
const app = express();

//middleware used for the  POST method
var bodyParser = require("body-parser");
app.use(bodyParser.json());
/////////////////////////////////////////////////////////////////////

//array of users
const users = [
  { id: 1, Name: "User1" },
  { id: 2, Name: "User2" },
  { id: 3, Name: "User3" },
];
/////////////////////////////////////////////////////////////////////

//port on which the app will run
const port = 5000;
/////////////////////////////////////////////////////////////////////

//route to get all the users
app.get("/users", (req, res, next) => {
  res.send(users);
  next();
});
/////////////////////////////////////////////////////////////////////

//route to add new user to the array
app.post("/users", (req, res) => {
  if (req.body === undefined) {
    res.send("User cannot be created No body found in the request ");
  } else {
    console.log(req.body);
    users.push(req.body);
    console.log(users);
    res.send("User created successfully");
  }
});
/////////////////////////////////////////////////////////////////////

//route to update the specified user
app.put("/users/:id", (req, res) => {
  var found = false;

  if (req.body.id !== undefined) {
    users.map((element) => {
      if (element.id === parseInt(req.params.id)) {
        console.log("Match found");
        element.id = req.body.id;
        element.Name = req.body.Name;
        found = true;
      }
      console.log(element);
    });

    if (found) {
      console.log(req.body);
      res.send("User with the id " + req.params.id + "updated successfully");
    } else {
      res.send("unable to find the user with id  = " + req.params.id);
    }
  } else {
    res.send("body not found");
  }
});
/////////////////////////////////////////////////////////////////////

//route to delete the specified user
app.delete("/users/:id", (req, res) => {
  console.log(req.params);
  var found = false;
  users.map((element) => {
    if (element.id === parseInt(req.params.id)) {
      console.log("The user with id " + req.params.id + "deleted successfully");
      found = true;
    }
  });
  if (found) {
    res.send("The user with id " + req.params.id + "deleted successfully");
  }
  else{
    res.send("The user with id " + req.params.id + " does not exist");

  }
});
/////////////////////////////////////////////////////////////////////

//app is listening at the port 5000
app.listen(port, () => {
  console.log("App running at port 5000   link http://localhost:5000/");
});
/////////////////////////////////////////////////////////////////////
