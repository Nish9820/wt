var fs = require("fs");
console.log("Creatingdirectory…");
fs.mkdir("./newdir", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Directory created!");
});
