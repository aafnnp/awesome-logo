const request = require("request");
const isProd = process.env.NODE_ENV === "production";

const BASE_URL = isProd ? "https://awesome-logo.vercel.app" : "http://localhost:3000"

export default (req, res) => {
  // path to file
  const filePath = req.query.filename;

  // filename only
  const fileName = filePath.substring(filePath.lastIndexOf("/") + 1);

  // set header
  res.setHeader("content-disposition", "attachment; filename=" + fileName);

  // send request to the original file
  request
    .get(`${BASE_URL}/logos/${ filePath }`) // download original image
    .on("error", function(err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h1>404 not found</h1>");
      res.end();
      return;
    })
    .pipe(res); // pipe converted image to HTTP response
};