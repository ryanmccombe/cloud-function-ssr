const functions = require("firebase-functions");
const path = require('path');
const next = require('next');

const app = require('./express');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
	dev,
	conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
});

const handle = nextApp.getRequestHandler();

const nextServer = functions.https.onRequest((request, response) => {
	if (!request.path) {
		request.url = `/${request.url}`;
	}
  return nextApp.prepare().then(() => handle(request, response))
});

module.exports = {
	next: nextServer,
	api: functions.https.onRequest(app)
};


