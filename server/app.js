const cors = require('cors');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const errorHandlers = require('./handlers/errorHandlers');

const { Storage } = require("@google-cloud/storage");
const { format } = require("util");
const Multer = require("multer");

require('./handlers/passport');
const routes = require('./routes');
const CORS_WHITELIST = require('./constants/frontend');

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

const cloudStorage = new Storage({
  keyFilename: `${__dirname}/service_account_key.json`,
  projectId: "dalmadaniela",
});
const bucketName = "dalmadaniela.com";

const bucket = cloudStorage.bucket(bucketName);

const app = express();

app.post("/upload-file-to-cloud-storage", multer.single("file"), function (req, res, next) {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();
  blobStream.on("error", (err) => {
    next(err);
  });
  blobStream.on("finish", () => {
    // The public URL can be used to directly access the file via HTTP.
    const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
    res.status(200).json({ publicUrl });
  });
  blobStream.end(req.file.buffer);
  console.log(req.file);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(expressValidator());

app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

const corsOptions = {
  origin: (origin, callback) =>
    CORS_WHITELIST.includes(origin)
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'))
};

app.use(cors(corsOptions));

app.use(function (_, res, next) {
  if(process.env.NODE_ENV === 'development')
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  else
    res.header('Access-Control-Allow-Origin', 'https://dalmadaniela.com');
  
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(`/api/v1`, routes);

app.use(errorHandlers.displayAuthenticationError);

module.exports = app;
