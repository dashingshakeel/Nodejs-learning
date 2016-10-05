var path= requir('path');
path.normalize('/this/isa//something');

path.join('this','is','a');
path.resolve('/this','is/what','../.','a','path');
path.isAbsolute('/thus');
path.isAbsolute('thus');
path.relative('/this/is /a/','/path');

path.dirname('/this/is /a/this.txt');

path.basename('/this/is /a/this.txt');

path.basename('/this/is /a/this.txt','.txt');

path.extname('/this/is /a/this.txt');
path.sep
"this/is/a/path".split("/");

path.parse('/this/is/a/path.tct');
path.format({dir: 'this/is',base: 'file.txt'})
