const path = require('path');
const express = require("express")
const app = express();
const vlq = require('vlq');
const port = 8989;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const rs = vlq.decode('UAAYD');
console.log(rs);
