var cron = require('node-cron');

const { exec  } = require('child_process');


var stdout
console.log('Initiating report');
exec('test.sh', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(stdout);
    
  });

  console.log(stdout);