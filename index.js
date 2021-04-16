var express = require("express");
var bodyParser = require("body-parser");
const path = require("path");
var app = express();
const router = express.Router();
var PORT = process.env.PORT || 2100;
const staticFileMiddleware = express.static(path.join(__dirname + "/dist"));
const history = require("connect-history-api-fallback");
var cors = require('cors')


app.options('*', cors()) // include before other routes 
app.use(cors())



const nodemailer = require("nodemailer");
var handlebars = require("handlebars");
var fs = require("fs");

var readHTMLFile = function (path, callback) {
  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    if (err) {
      throw err;
      callback(err);
    } else {
      callback(null, html);
    }
  });
};

let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 465,
    secure: true,
    auth: {
        user: "apikey",
        pass: "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"
    }
});

  

app.post("/send/email" , (req, res) => {
	console.log("SUP");
  readHTMLFile(__dirname + "/web-msg-template.html", function (err, html) {
    transporter
      .sendMail({
        from: '"PushTalents" <web@sawatechnologies.org>',
        to: "info@sawatechnologies.org",
        subject: "Message from sawatechnologies.org",
        html: handlebars.compile(html)({
          name: req.body.name,
          email: req.body.email,
          subject: req.body.subject,
          message: req.body.message,
        }),
      })
      .then((success) => {
        console.log("email send success");
        console.log(success);
        res.json({
          message: "Email sent",
        });
      })
      .catch((err) => {
        console.log("email send fail");
        console.log(err);
        res.json({
          message: "Failed to send email",
        });
      });
  });
});


// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE"
//   );
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since"
//   );
//   next();
// });

app.use(staticFileMiddleware);
app.use(
  history({
    disableDotRule: true,
    verbose: true,
  })
);
app.use(staticFileMiddleware);

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/dist`));
app.engine(".html", require("ejs").renderFile);
app.set("views", `${__dirname}/dist`);

router.get("/*", (req, res, next) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});




app.listen(PORT, function () {
  console.log({
    __dirname,
  });
  console.log("Express listening on PORT " + PORT + " ! ");
});
