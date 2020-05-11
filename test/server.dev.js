const express = require("express");
const open = require("open");
const LOCAL_HOST_PORT = 3001;

const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const config = require("../webpack.config");

/*********************************
* Entry
*********************************/
const webpackServer = "webpack/hot/dev-server";
const webpackClient = "webpack-hot-middleware/client";

function addServerAndClientToString(str) {
    return [str, webpackServer, webpackClient]
}

function addServerAndClientToArray(array) {
    array.push(webpackServer, webpackClient);
    return array;
}

if(typeof config.entry === "string") {
    config.entry = addServerAndClientToString(config.entry);
} else if (Array.isArray(config.entry)) {
    config.entry = addServerAndClientToArray(config.entry);
} else {
    for(let e in config.entry) {
        if(config.entry.hasOwnProperty(e) === false) {
            continue;
        }
        if(typeof config.entry[e] === "string") {
            config.entry[e] = addServerAndClientToString(config.entry[e]);
        } else if (Array.isArray(config.entry[e])) {
            config.entry[e] = addServerAndClientToArray(config.entry[e]);
        } else {
            console.error(`Properties of the entry object should be either strings or Array<string>.`);
        }
    }
}

/*********************************
* Output
*********************************/
config.output.path = "/";
config.output.publicPath = `http://localhost:${LOCAL_HOST_PORT}/wwwroot/js/`;

/*********************************
* Express
*********************************/
const compiler = webpack(config);

const app = express();
app.use(express.static(__dirname));

router = express.Router();

router.get("/", (req, res) => res.render("index"));
app.use(router);

app.listen(LOCAL_HOST_PORT, () => console.log(`listening on ${LOCAL_HOST_PORT}`));

open(`http://localhost:${LOCAL_HOST_PORT}`);

// app.use(webpackDevMiddleware(compiler,
//     {
//         publicPath: config.output.publicPath,
//         stats: { colors: true }
//     }));

// app.use(webpackHotMiddleware(compiler,
//     {
//         log: console.log
//     }));
