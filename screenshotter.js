import { chromium } from 'playwright'; // Need to check if playwright is available or I need to use another approach

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173'); // Assuming dev server running or preview

  const viewports = [
    { width: 1440, height: 900 },
    { width: 1024, height: 768 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
    { width: 844, height: 390 },
  ];

  for (const v of viewports) {
    await page.setViewportSize(v);
    await page.screenshot({ path: `education-${v.width}x${v.height}.png` });
  }
  await browser.close();
}
run();
