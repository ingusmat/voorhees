const fs = require('fs');

const voorhees = function (filename, key, val) {
  let fileData = {};

  fs.readFile(filename, function(err, file) {
    if (err) throw err;
    try {
      fileData = JSON.parse(file);
    } catch (error) {
      console.log('bad json found in file\n' + error);
    }
    fileData = updateObj(fileData, key, val)
    console.log(fileData);
  });
};

const updateObj = function(obj, newKey, newVal) {
  obj[newKey] = newVal;

  return obj;
};

module.exports = voorhees;
