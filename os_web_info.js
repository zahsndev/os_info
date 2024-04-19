// Get operating system information
const osInfo = navigator.platform;

// Get browser information
const browserInfo = {
    name: navigator.appName,
    version: navigator.appVersion
};

// Display the information
console.log("Operating System:", osInfo);
console.log("Browser Name:", browserInfo.name);
console.log("Browser Version:", browserInfo.version);


const os = require('os');

// Get operating system information
const osInfo = {
    platform: os.platform(),
    release: os.release(),
    arch: os.arch()
};

console.log("Operating System:", osInfo);

// In a Node.js environment, browser information isn't available since it's not running in a browser.
