const { takeScreenshot } = require('../utils/screenshot');
const environment = require('../../config/environment');
const axios = require('axios');

// Example test for SQL Injection vulnerability
async function testSQLInjection() {
    const response = await axios.post(`${environment.appUrl}/login`, {
        username: 'admin',
        password: "' OR '1'='1",
    });

    if (response.data.success) {
        console.log('[VULNERABILITY FOUND] SQL Injection vulnerability detected.');
    } else {
        console.log('No SQL Injection vulnerability found.');
    }
}

// Run the test
testSQLInjection().then(() => {
    takeScreenshot('chrome-screenshot.png');
});
