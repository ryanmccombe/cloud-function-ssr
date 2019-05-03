const express = require('express');

const app = express();
app.get("/api/hello", (request, response) => {
  response.send(
    "Hello from Express on Firebase!"
  );
});

app.listen(3001, () => {
  console.log('Listening', 3001, new Date().toString());
});

module.exports = app;