const express = require("express");
const app = express();


const start = async () => {
  app.listen(3005, () => {
    console.log("server running on port 3005");
  });
};
start();
