let fs = require("fs");
let path = require("path");
let types = {
    Archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    Documents: ["docx","doc",
      "pdf",      "xlsx",
      "xls",      "odt",
      "ods",      "odp",
      "odg",      "odf",      "txt",
      "ps",      "tex",    ],
    App: ["exe", "dmg", "pkg", "deb"],
    Coding_files: ["js", "py", "html", "cpp", "c++", "c", "css"],
    Picture :["tif","tiff","bmp","jpg","jpeg","gif","png","eps","raw","cr2","nef","orf","sr2",],
    Videos :["webm","mkv","flv","vob","drc","avi","3gp","mpg","mpeg","m2v","mp2","mpv","m4v","mp4","amv","viv","rm",]
  };
function organizeFn(dirPath) {
    // console.log("Organize command inmplemented for ", dirPath);
    // 1. input->directory path given
    let destPath;
    if (dirPath == undefined) {
      destPath = process.cwd();
      return;
    } else {
      let doesExist = fs.existsSync(dirPath);
      if (doesExist) {
      } else {
        console.log("kindly enter the correct path ");
      }
    }
    // 2. Create->organized_files ->directory
    destPath = path.join(dirPath, "organized folder");
    // call mkdir function if there is no organized folder
    if (fs.existsSync(destPath) == false) {
      fs.mkdirSync(destPath);
  }
  organizerHelper(dirPath, destPath);
  }
  
  
  function organizerHelper(src, dest) {
    // read all files
    let childNames = fs.readdirSync(src);
    // print all files name
    console.log(childNames);
  
    // 3. identify category of all files presnet in that input directory->
    for (let i = 0; i < childNames.length; i++) {
      // get address of each files in unorganize directory
      let childAddress = path.join(src, childNames[i]);
      // checking that we are taking only file not any folder
      let isFile = fs.lstatSync(childAddress).isFile();
      if (isFile) {
        // console.log(childNames[i]);
        let category = getCategory(childNames[i]);
        console.log(childNames[i], "belongs to -->", category);
        // 4. copy/cut files to that organized directory inside of any category folder
  
        sendFiles(childAddress, dest, category);
      }
    }
  }
  
  function sendFiles(srcFilePath, dest, category) {
    let categoryPath = path.join(dest, category);
    if (fs.existsSync(categoryPath) == false) {
      fs.mkdirSync(categoryPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(categoryPath, fileName);
    fs.copyFileSync(srcFilePath, destFilePath);
    // delete files from original directory after copy
    // fs.unlinkSync(srcFilePath);
    console.log(fileName, "copied to ", category);
  }
  function getCategory(name) {
    let ext = path.extname(name);
    ext = ext.slice(1);
    for (let type in types) {
        let cTypeArray = types[type];
        for (let i = 0; i < cTypeArray.length; i++) {
            if (ext == cTypeArray[i]) {
                return type;
            }
        }
    }
    return "others";
}
  module.exports ={
    organizeKey : organizeFn
  }