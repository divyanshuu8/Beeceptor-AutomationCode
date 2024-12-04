const { chromium } = require("playwright");

(async () => {
  // Define variables
  const email = "singhdivyanshu975@gmail.com"; 
  const password = "Ds@12345678"; 
  const ruleMatchValue = "/proxytest"; 
  const targetEndpoint = "https://softintern.free.beeceptor.com/sdeintern"; 

  const browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();
  const page = await context.newPage();

  // Step 1: Navigate to Beeceptor
  await page.goto("https://beeceptor.com/");
  await page.waitForSelector('a:has-text("Sign in")', { timeout: 60000 });
  await page.click('a:has-text("Sign in")');

  // Step 2: Fill in the email and password
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);

  // Step 3: Click the Sign In button
  await page.click('button[type="submit"]');

  // Step 4: Navigate to the required page
  await page.goto("https://app.beeceptor.com/console/softintern");
  await page.click('a.btn.btn-link.btn-sm[data-target=".allRules"]');
  await page.click('button:has-text("Additional Rule Types")');

  // Wait for the "Create Proxy or Callout" link and click it
  await page.waitForSelector('a:has-text("Create Proxy or Callout")', { timeout: 30000 });
  await page.click('a:has-text("Create Proxy or Callout")');

  // Step 5: Fill in the form fields
  await page.fill('input[name="ruleMatchValue"]', ruleMatchValue);
  await page.fill("#targetEndpoint", targetEndpoint);

  // Step 6: Save the Proxy
  await page.click("#saveProxy");

  console.log(`go to - ${targetEndpoint+ruleMatchValue}`);

  // Close the browser
  await browser.close();
})();
