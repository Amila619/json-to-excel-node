const { utils, writeFile } = require("xlsx");
const axios = require("axios");
const path = require("path");

async function jsonToExcel(outputPath = "output.xlsx") {
  try {
    const res = await axios.get("http://localhost:5000/users");
    const jsonData = res.data;

    const worksheet = utils.json_to_sheet(jsonData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const fullPath = path.resolve(__dirname, outputPath);
    writeFile(workbook, fullPath);

    console.log("JSON data successfully written to", fullPath);
  } catch (err) {
    console.error("Error fetching JSON data:", err.message);
  }
}

module.exports = {
  jsonToExcel
};
