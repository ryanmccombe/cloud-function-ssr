const functions = require("firebase-functions");
const express = require("express");
const path = require('path');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
	dev,
	conf: { distDir: `${path.relative(process.cwd(), __dirname)}/next` }
});

const handle = nextApp.getRequestHandler();

const app = express();
app.get("/hello", (request, response) => {
	response.send(
		"Hello from Express on Firebase!"
	);
});

app.get("*", (request, response) => {
	return nextApp.prepare().then(() => handle(request, response))
});

const api = functions.https.onRequest((request, response) => {
	if (!request.path) {
		request.url = `/${request.url}`;
	}
	return app(request, response);
});

module.exports = {
	next: api
};


