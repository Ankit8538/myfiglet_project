let figlet = require("figlet");
figlet("Ankit", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;c
    }
    console.log(data);
  });