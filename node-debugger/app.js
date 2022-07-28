// const express = require('express');
// const app = express();

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const A = require('./a');
let watchVariable = 1;
console.log(A)

new Promise((resolve) => {
  setTimeout(() => {
    watchVariable = 2;
    console.log(A.name);
    A.say();
    resolve('Hello');
  }, 1000);
}).then((data) => {
  console.log(data);
});
