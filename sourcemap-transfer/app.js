const path = require('path')
const fs = require('fs');
const express = require("express")
const app = express();
const vlq = require('vlq');
const sorcemap = require('source-map');
const port = 9999;

app.use(express.static(path.join(__dirname, 'public')));

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

// TODO: 前端错误SDK
// TODO: 错误日志上报及处理
// TODO: sourcemap储存
// TODO: 请求解析sourcemap映射
// TODO: 后台监控系统可视化显示错误信息

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// const rs = vlq.decode('UAAYD');
// console.log(rs);
