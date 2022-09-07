const xlsx = require("node-xlsx");
const path = require("path");
const fs = require("fs");
const version = require("../package.json").version;
console.log(version);
console.log("************ 开始转换... ************");
transExcel();
console.log("************ 转换成功!!! ************");

function transExcel() {
  const filePath = path.join(__dirname, `affiliate_${version}_i18n.xlsx`);
  const fileContent = fs.readFileSync(filePath);
  const excelContent = xlsx.parse(fileContent);
  const data = excelContent[0].data;
  const langList = data[0].splice(1);
  let jsonObj = {};
  langList.forEach((item) => {
    jsonObj[item] = {};
  });

  data.forEach((item) => {
    if (item[0] && item[0] !== "key") {
      langList.forEach((lang, index) => {
        jsonObj[lang][item[0]] = item[index + 1];
      });
    }
  });
  // 如果没有output文件夹 则创建output文件夹存放转化后的excel
  if (!fs.existsSync(path.join(__dirname, "../static/i18n"))) {
    fs.mkdirSync(path.join(__dirname, "../static/i18n"));
  }

  for (let key in jsonObj) {
    const content = JSON.stringify(jsonObj[key], null, "\t");
    const outputPath = path.join(__dirname, "../static/i18n", `${key}.json`);
    fs.writeFileSync(outputPath, content);
  }
}
