let fs = require("fs");
let path = require("path");
function helpFn(dirPath) {
    // console.log("Help command inmplemented for ", dirPath);
    console.log(`
      List of All the commands:
              file tree -> Represent all data in Tree format of current working directory);
              file organize -> Organize All the files base on category ,i.e (Video , Music , Coding ,Document).`)
  }

module.exports= {
    helpKey :helpFn
}