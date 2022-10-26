const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


const alarm = (time) => {
    console.log(`setting timer for ${time} seconds...`)
    setTimeout(() => {
        process.stdout.write('beep\n');
    }, time * 1000)
};

stdin.on('data', (key) => {
    const keys = ['\u0031', '\u0032', '\u0033', '\u0034', '\u0035', '\u0036', '\u0037', '\u0038', '\u0039'];

    if (key === "\u0062") {
        process.stdout.write('beep\n');
    }

    if (keys.includes(key)) {
        alarm(key);
    }

    if (key === '\u0003') {
        console.log('Thanks for using me, ciao!');
        process.exit();
    }
});
