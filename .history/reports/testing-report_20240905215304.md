# Security Bug Bounty Testing Report

## 1. Emulator Screenshot:
![Emulator Screenshot](./emulator-screenshot.png)

## 2. Chrome Browser Screenshot:
![Chrome Screenshot](./chrome-screenshot.png)

## 3. Vulnerabilities Found:

- Unencrypted sensitive data in local storage.
- SQL Injection vulnerability on login endpoint.
- Reflected XSS on search functionality.

## Steps for Reproduction:

1. For SQL Injection:
   - Go to the login page on the emulator.
   - Enter `' OR '1'='1` as the password.
   - Login succeeds despite wrong credentials.
