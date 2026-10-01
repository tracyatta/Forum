// Turns each design in designs.html into a PNG ready to upload.
// Run with: node render.js
const path = require('path');
const { chromium } = require(process.env.PW_PATH || 'playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 2400, height: 2200 } });
  await page.goto('file://' + path.join(__dirname, 'designs.html'));
  await page.evaluate(() => document.fonts.ready);
  for (const id of ['instagram', 'linkedin']) {
    await page.locator('#' + id).screenshot({ path: path.join(__dirname, 'exports', id + '.png') });
    console.log('Saved exports/' + id + '.png');
  }
  await browser.close();
})();
