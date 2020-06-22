const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const sequelize = require("./db/connection");
const db = require("./models");

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established sucessfully.');
  })
  .catch(err => {
    console.log('Unable to connect to the database: ', err);
  })

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

// Send every request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(() => {
  app.listen(PORT, function () {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
