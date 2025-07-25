const { utils, writeFile } = require("xlsx");
const axios = require("axios");

async function jsonToExcel() {
  try {
    const res = await axios.get("http://localhost:5000/users");
    const jsonData = res.data;

    const worksheet = utils.json_to_sheet(jsonData);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, "Sheet1");

    writeFile(workbook, "output.xlsx");
    console.log("JSON data successfully converted to output.xlsx");
  } catch (err) {
    console.error("Error fetching JSON data:", err);
  }
}

module.exports = {
  jsonToExcel
}