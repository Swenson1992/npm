let a = require('debug')('worker:a');
let b = require('debug')('worker:b');

let work = () => {
  a('doing lots of uninteresting work');
  setTimeout(work, Math.random() * 1000);
}

work()

let workb = () => {
  b('doing some work');
  setTimeout(workb, Math.random() * 2000);
}

workb()