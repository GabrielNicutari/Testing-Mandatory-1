// setup express
const express = require('express');

const app = express();
console.log('hi');
// setup static dir
app.use(express.static(`${__dirname}`));

const PORT = process.env.PORT || 8080;
/* eslint-disable no-debugger, no-console */
app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log('Server is running on port', Number(PORT));
});
