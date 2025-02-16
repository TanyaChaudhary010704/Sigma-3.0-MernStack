const figlet = require('figlet');
figlet("Hello World", function (err, data) {
  if (err) {
    console.log("Error");
    console.dir(err);
    return;
  }
  console.log(data);
});
//to run - node index.js
