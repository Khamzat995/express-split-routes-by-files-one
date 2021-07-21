const express = require("express");
const app = express();
const port = 4000;
const chalk = require("chalk");
const boxen = require("boxen");

app.use(require("./routes/products.route"));
app.use(require("./routes/brands.route"));

app.listen(port, () => {
  console.log(
    boxen(chalk.bold.greenBright("Сервер подключен"), {
      borderColor: "yellowBright",
      borderStyle: "round",
    })
  );
});
