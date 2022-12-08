// #!/usr/bin/env node
let helpObj = require("./commands/help");
let treeObj = require("./commands/tree")
let organizeObj = require("./commands/organize")
let inputArr = process.argv.slice(2);
console.log(inputArr);

let command = inputArr[0];

// node main.js tree "DirectoryPath"
// node main.js organize "directoryPath"
// node main.js help

switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;
  case "organize":
    let workdir = process.cwd();
    organizeObj.organizeKey(workdir);
    break;
  case "help":
    helpObj.helpKey(inputArr[1]);
    break;
  default:
    console.log("👏 input right command");
}
