let args = process.argv.splice(2)


const alarm = (time) => {
    setTimeout(() => {
      process.stdout.write('beep\n');
    }, time)};
  

for (let arg of args) {
    if (arg < 0 || arg === NaN) {
        continue;
    }

    alarm(arg * 1000);
}