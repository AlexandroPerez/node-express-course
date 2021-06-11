const express = require("express");
const app = express();

// In Express >= 4.16.0 body parser re-added under express.json() and express.urlencoded()
//const bodyParser = require("body-parser");
app.use(express.json());

const mockUserData = [{ name: "Mark" }, { name: "jill" }];
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match our records!",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and/or username do not match our records",
    });
  }
});

app.listen(8000, () => {
  console.log("server is running wild");
});
