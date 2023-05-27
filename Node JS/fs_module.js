// This method is used to include all functions of fs module
// const fs = require("fs");

// But what if we want to use only one function in fs module
// We get only one function from fs module
const fs = require("fs").writeFileSync;

fs("fs.txt" , "My name is sumit. I am learning node js. Today day date is 10-05-2023.");