import  Router  from "../src/routes/router";
const express = require("express");
const app = express();
const port = 3001;
app.use(express.json());

app.use(Router);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});


module.exports = app;