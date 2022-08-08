const path = require('path')
const fs = require('fs');
const express = require("express")
const app = express();
const vlq = require('vlq');
const sorcemap = require('source-map');
const port = 9999;

// app.use(express.static(path.join(__dirname, 'public')));

app.use(async (req, res, next) => {
  const targetmap = fs.readFileSync(path.resolve(__dirname, 'public/sourcemap/main.fb81151a.js.map'), 'utf8');
  const mapJSON = JSON.parse(targetmap);
  const concumer = await new sorcemap.SourceMapConsumer(mapJSON);
  const {
    line,
    column,
    source: fileName
  } = concumer.originalPositionFor({
    line: 2,
    column: 143319
  })
  const { sources, sourcesContent } = mapJSON;
  const sourceContent = sourcesContent[sources.indexOf(fileName)];
  console.log(`源码：\n文件名：${fileName}\n行：${line},列：${column}\n`, sourceContent)
  await next();
})
app.use((req, res, next) => {
  res.json({
    status: 200,
    message: 'OK'
  })
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// const rs = vlq.decode('UAAYD');
// console.log(rs);
