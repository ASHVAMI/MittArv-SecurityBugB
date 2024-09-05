
const { exec } = require('child_process');

function takeScreenshot(fileName) {
    exec(`adb exec-out screencap -p > ./reports/${fileName}`, (err) => {
        if (err) {
            console.error(`Error taking screenshot: ${err}`);
        } else {
            console.log(`Screenshot saved as ${fileName}`);
        }
    });
}

module.exports = { takeScreenshot };
