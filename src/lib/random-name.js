var operations = require('./operations').operations

function sample (arr) {
  return arr[Math.floor(arr.length * Math.random())]
}

module.exports = function () {
  return sample(operations)
}
