const { jsonToExcel } = require("./utils");
const express = require("express");
const path = require("path")
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <button><a href="/download-file" download>Download Excel</a></button>
        <button><a href="/generate-file" >Generate Excel</a></button>
      </body>
    </html>
  `);
});

app.get("/generate-file", async (req, res) => {
  await jsonToExcel()
  res.redirect("/")
})

app.get("/download-file", (req, res) => {
  res.download("./output.xlsx");
});

app.listen(port, () => console.log("Server running on http://localhost:3000"));
