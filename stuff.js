var stuff = function (name) {
  return `hello ${name}! welcome to node-demo`
}

var sum = function(a, b) {
  return a + b;
}

var constantNumber = 3.1416926;

module.exports = { introduce: stuff,  sum, constantNumber }