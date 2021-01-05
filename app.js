const express = require("express");
// const MongoClient = require('mongodb').MongoClient;
const _ = require("lodash");
var bodyParser = require("body-parser");
var cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
// Connection URL
// const url = 'mongodb://localhost:27017';

// Database Name
// const dbName = 'myproject';

let data = {
  users: [
    {
      name: "vishal",
      id: 1,
    },
    {
      name: "arvind",
      id: 2,
    },
  ],
};

app.get("/users/:id", (req, res) => {
  const user = _.find(data.users, function (user) {
    return user.id == req.params.id;
  });
  res.send(user || {error:`${req.params.id} User Id  not found`});
});

app.post("/create-user", (req, res) => {
  const body = req.body;
  data.users.push({
    name: body.name,
    id: data.users.length + 1,
  });
  res.send({});
});

app.delete("/delete-user/:id", (req, res) => {
  _.remove(data.users, function (n) {
    return n.id == req.params.id;
  });
  res.send(data.users);
});

app.put("/update-user", (req, res) => {
  const body = req.body;
  const update = data.users.map(function (item, index) {
    if (item.id == body.id) {
      data.users[index].name = body.name;
    }
  });

  res.send(data.users);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
