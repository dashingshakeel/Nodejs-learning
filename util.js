 var util= require('util');

 var log= util.debuglog('ful');

 var log2= util.debuglog('lul');
 log('this is first message');
 log2('this is 2nd message');

 var person={
  name: 'Shakeel',
  interests: ['javascript','elxir']
 };
 console.log(util.format('%s : %j',person,person));

 //console.log(util.inspect(util,{colors: true}));


 function User(){

 }
 User.prototype.loggedin= function(){
  return true;
 };
 function Admin(){

 }
 util.inherits(Admin,User);
 admin=new Admin();
 console.log(admin.loggedin());