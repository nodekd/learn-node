var shell = require('shelljs');
shell.echo('executing shell command');
var log = shell.exec('ipconfig');
exports.shecllCommand = function(){
    shell.exec('ipconfig');
}
console.log(log);