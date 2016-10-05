var ws= new (require('stream').Writable)();
var count=0;
var fib= require('./streams');
ws._write=function(chunk,encoding,next){
  console.log(chunk.toString())
  if(count++ <10) setTimeout(next,100);
};
fib.pipe(ws);