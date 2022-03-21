// setup express
const express = require('express');

const app = express();

// setup static dir
app.use(express.static(`${__dirname}`));

//setup address router/s
const addressRouter = require("./src/functions/address");
app.use(addressRouter.router);

const PORT = process.env.PORT || 8080;
/* eslint-disable no-debugger, no-console */
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port', Number(PORT));
});
