const express = require("express");
const app = express();

const mockUserData = [{ name: "Mark" }, { name: "jill" }];
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData,
  });
});

app.listen(8000, () => {
  console.log("server is running wild");
});
