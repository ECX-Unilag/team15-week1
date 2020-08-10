const app = require("./app");
require("dotenv").config();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log("Connecting to server at port 3000..");
});

module.exports = app;
