const cors = require('cors');
const Multer = require("multer");
const { format } = require("util");
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { Storage } = require("@google-cloud/storage");
const expressValidator = require('express-validator');
const errorHandlers = require('./handlers/errorHandlers');

const routes = require('./routes');
const CORS_WHITELIST = require('./constants/frontend');
require('./handlers/passport');

const app = express();

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

const cloudStorage = new Storage({
  keyFilename: `${__dirname}/service_account_key.json`,
  projectId: "dalmadaniela",
});
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  },
});
const bucketName = "dalmadaniela.com";
const bucket = cloudStorage.bucket(bucketName);

app.post("/api/v1/upload", multer.single("file"), function (req, res, next) {
  if (!req.file) {
    res.status(400).send("No file uploaded.");
    return;
  }
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream();

  blobStream.on("error", (err) => next(err));
  blobStream.on("finish", () => {
    const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`);
    res.status(200).json({ publicUrl });
  });

  blobStream.end(req.file.buffer);
});

app.use(`/api/v1`, routes);

app.use(errorHandlers.displayAuthenticationError);

module.exports = app;
