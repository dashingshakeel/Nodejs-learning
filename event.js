var EventEmitter= require('events').EventEmitter;
var ee= new EventEmitter();

ee.on('someEvent', function(data){
  console.log('someEvent', data);
});

ee.once('someEvent',function(){
  console.log('only oncce');
});
function callback(){
  console.log('mmanual onee');
  ee.removeListener('someEvent',callback);
}
ee.on('someEvent',callback)
//ee.emit('someEvent',{option: true});

//ee.emit('someEvent',{option: false});


var util=  require('util');
function UserList(){
  this.list =[];
  EventEmitter.call(this);
}
util.inherits(UserList,EventEmitter);

UserList.prototype.add = function (name) {
  this.list.push(name);
  this.emit('new-user',name);

  // body... 
};
var list = new UserList();

list.on('new-user', function(name){
  console.log('hello',name);
});

list.add('hk');