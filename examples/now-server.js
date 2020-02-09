// @ts-check
const express = require('express');
const gunServe = require('../lib/serve');
const Gun = require('../lib/server');
const http = require('http');

const web = express();

web.use(gunServe);

// @ts-ignore
Gun.log = Object.assign(() => {}, Gun.log, {
	verbose: false,
});
// @ts-ignore
Gun.log.off = true;
// @ts-ignore
console.LOG = false;

let server = http.createServer(web).listen(80)

let _gun = new Gun({
	web: server,
	peers: [

	],
	log() {},
})

console.dir(server.address())

module.exports = server;
