// TODO: let myArgs = process.argv.slice(2);
import Excel from "exceljs";
import data from "../src/i18n/zh-CN/index.js";
import dataEn from "../src/i18n/en-US/index.js";

const start_time = new Date();
const workbook = new Excel.stream.xlsx.WorkbookWriter({
  filename: "./data.xlsx",
});
const worksheet = workbook.addWorksheet("Sheet");

worksheet.columns = [
  { header: "key", key: "key" },
  { header: "中文", key: "value" },
  { header: "en", key: "valueEn" },
];

// 当前进度
let current_num = 0;
const time_monit = 400;
const temp_time = Date.now();

// object to array : key: pdt.xxx value: value
function getExcelData(data, dataEn) {
  const _data = [];
  deepObject2Array(data, dataEn);
  function deepObject2Array(data = {}, dataEn = {}, parentKey = "") {
    for (let childName in data) {
      const key = parentKey ? parentKey + "." + childName : childName;
      if (
        typeof data[childName] === "object" &&
        !Array.isArray(data[childName]) //例如home.desc.list 是个数组
      ) {
        deepObject2Array(data[childName], dataEn[childName], key);
      } else {
        _data.push({
          key: key,
          value: data[childName],
          valueEn: dataEn[childName] ? dataEn[childName] : "",
        });
      }
    }
  }

  return _data;
}

const excelData = getExcelData(data, dataEn);
const length = excelData.length;
console.log("开始添加数据...");
// 开始添加数据
for (let i in excelData) {
  worksheet.addRow(excelData[i]).commit();
  current_num = i;
  if (Date.now() - temp_time > time_monit) {
    temp_time = Date.now();
    console.log(((current_num / length) * 100).toFixed(2) + "%");
  }
}
console.log(`添加数据${length}条`);
workbook.commit();

const end_time = new Date();
const duration = end_time - start_time;

console.log(`用时${duration}s`);
console.log("程序执行完毕");
