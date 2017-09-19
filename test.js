const voorhees = require("./index");

let filename = process.argv[2];
let key = process.argv[3];
let val = process.argv[4];

voorhees(filename, key, val);