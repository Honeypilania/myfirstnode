



//some Basic Node Global objects


console.log(__dirname);
console.log(__filename);

// How can i require or add files
var index = require('./main');

//Now here we can access name value from main.js through require object
console.log(index.abc);