
//require contains annotation from where information to be pulled out from jar
const {test} = require('@playwright/test');

//async function is used to wait for the response from the server before moving to the next line of code
//in playwright test, compiler does not wait for first step to be completed, it directly jumps to next step when there is time left to complete first step.
//because of this issue, async and await keywords are used to so that the code is executed in the correct order 
//browser is a global variable provided by playwright test framework. (if we do not use it after async, it will not work.)
test('My Test', async ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.google.com');
});

//after text.only, only this test will be executed and rest of the tests will be ignored.
//it is used to run only specific test when we have multiple tests in our test file. 
//it is very useful when we want to debug a specific test or when we want to run only a specific test.
test('run only My Test', async ({browser}) => {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://www.google.com');
});