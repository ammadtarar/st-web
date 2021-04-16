var express = require("express");
var bodyParser = require('body-parser');
const path = require('path');
var app = express();
const router = express.Router()
var PORT = process.env.PORT || 2000;
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));
const history = require('connect-history-api-fallback');

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods",
		"GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
	res.header("Access-Control-Allow-Headers",
		"Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since"
	);
	next();
});

app.use(staticFileMiddleware);
app.use(history({
	disableDotRule: true,
	verbose: true
}));
app.use(staticFileMiddleware);

app.use(bodyParser.json());



app.use(express.static(`${__dirname}/dist`));
app.engine('.html', require('ejs').renderFile);
app.set('views', `${__dirname}/dist`);
router.get('/*', (req, res, next) => {
	res.sendFile(`${__dirname}/dist/index.html`);
})

app.listen(PORT, function() {
	console.log({
		__dirname
	});
	console.log('Express listening on PORT ' + PORT + ' ! ');
});
