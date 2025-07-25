const { jsonToExcel } = require("./utils");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <body>
        <button><a href="/download-file" download>Download Excel</a></button>
      </body>
    </html>
  `);
});

app.get("/download-file", (req, res) => {
  res.download("./output.xlsx");
});

app.listen(port, () => console.log("Server running on http://localhost:3000"));
