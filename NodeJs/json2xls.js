const json2xls = require("json2xls");

const langs = ["en_US", "zh_CN", "zh_TW"];
function main() {
  const arr = [];
  langs.forEach((lang) => {
    try {
      arr.push(JSON.parse(fs.readFileSync(`../static/i18n/${lang}.json`)));
    } catch (error) {
      console.error(error);
    }
  });
  const data = getData(...arr);
  const xls = json2xls(data);
  // fs.writeFileSync(`${packageJson.name}${packageJson.version}.xlsx`, xls, "binary");
  fs.writeFileSync(`affiliate_${packageJson.version}_i18n.xlsx`, xls, "binary");
  console.log("************ 转换成功！！************");
}

function getData(zh, en, tw) {
  const data = [];

  for (let key in zh) {
    data.push({
      key,
      zh_CN: zh[key],
      en_US: en[key],
      zh_TW: tw[key]
    });
  }

  return data;
}

main();
