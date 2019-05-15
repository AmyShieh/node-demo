const events  = require('events');
const util  = require('util');

// var myEmitter = new events.EventEmitter();
//
// myEmitter.on('someEvent', function (mssg) {
//   console.log(mssg);
// })
//
// myEmitter.emit('someEvent', 'hello Amy !');

const Person = function (name) {
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var amy = new Person('amy');
var roy = new Person('roy');
var doudou = new Person('doudou');

var people = [amy, roy, doudou];

people.forEach(eachone => {
  eachone.on('speak', function (mssg) {
    console.log(`${eachone.name} said: ${mssg}`);
  })
});

amy.emit('speak', 'hi~');
roy.emit('speak', 'hi~');
doudou.emit('speak', 'wangwang~');