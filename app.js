const express = require("express");
const a = express();

const addDays = require("date-fns/addDays");

a.get("/", (request, response) => {
  const date = new Date();
  const update = addDays(
    new Date(date.getFullYear(), date.getMonth(), date.getDate()),
    100
  );
  response.send(
    `${update.getDate()}/${update.getMonth() + 1}/${update.getFullYear()}`
  );
});

module.exports = a;
