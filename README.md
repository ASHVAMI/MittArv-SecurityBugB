MittArv Security Bug Bounty - Testing Project

Welcome to the MittArv security bug bounty testing project! This repository contains the necessary code and instructions to test the MittArv Android app for potential security vulnerabilities. This project includes scripts to automate basic security tests and take screenshots during the testing process.

1. Project Setup:
1.1. Prerequisites:
Before running the tests, ensure that the following software is installed on your system:
Node.js (v14.x or higher)
npm (Node Package Manager)
Chrome (latest version)
Android Emulator (for testing the Android app)

1.2. Clone the Repository:
First, clone this repository to your local machine using Git:
git clone https://github.com/your-username/mittarv-bug-bounty.git

Navigate to the project directory:
cd mittarv-bug-bounty

1.3. Install Dependencies:
npm install

2. Configuration:
module.exports = {
  appUrl: 'https://mittarv-android-app-url.com',
  referralCode: '2402ASMT',
  emulatorDetails: 'Android Emulator API 29',
};

3. Running the Security Tests
The testing scripts are automated to check for basic security vulnerabilities, such as SQL Injection and unencrypted sensitive data. The script also takes screenshots to aid in documentation.

3.1. Running Chrome Screenshot Test:
node src/testing/security-tests.js

3.2. Running Emulator Screenshot Test:
adb exec-out screencap -p > ./reports/emulator-screenshot.png

4. Testing Results:

Vulnerabilities Log: The security vulnerabilities identified are logged in logs/vulnerabilities.log.

Screenshots: The captured screenshots are saved in the /reports/ folder, with filenames like chrome-screenshot.png and emulator-screenshot.png.

Testing Report: A detailed report of the security testing, including steps, vulnerabilities, and reproduction instructions, is found in reports/testing-report.md.

Final Report: Create a vulnerabilities-report.pdf with all the vulnerabilities found and testing details (including screenshots). This document is to be submitted along with the code.

7. Additional Information
The project automates a basic security testing process and logs vulnerabilities.
This project can be extended with additional tests, like Cross-Site Scripting (XSS), CSRF, etc.
Use the referral code 2402ASMT when testing the Android app.

Good luck with your testing!