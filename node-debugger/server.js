const express = require('express');
const app = express();

const port = 3001;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.json({
    code: 200,
    message: 'Hello World',
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
