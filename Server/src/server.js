const express = require("express");
const app = express();
import db from "./configs/db/connect";
import initWebRoutes from "./routes/web";
import multer from "multer";
import path from "path";

require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "../images")));

app.get("/", (req, res) => {
  res.send({ message: "Backend server is running" });
});
// app.use(cors({ origin: true }));
// Add headers before the routes are defined
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

//Connect to DB
db.connect();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/v1/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

initWebRoutes(app);

app.listen(process.env.PORT || 6969, function () {
  console.log(`Example app listening on port`);
});
