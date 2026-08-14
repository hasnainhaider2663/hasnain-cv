import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const viewports = [
    { width: 1920, height: 1080 },
    { width: 1440, height: 900 },
    { width: 1280, height: 800 },
    { width: 1024, height: 768 },
    { width: 768, height: 1024 },
    { width: 390, height: 844 },
    { width: 844, height: 390 },
  ];

  for (const viewport of viewports) {
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    await page.goto('http://localhost:3000/');
    
    // Check for overflow
    const isOverflow = await page.evaluate(() => {
        return document.body.scrollWidth > window.innerWidth;
    });
    console.log(`Viewport ${viewport.width}x${viewport.height}: Overflow = ${isOverflow}`);

    // Check interaction
    const edu = page.locator('#education');
    await edu.scrollIntoViewIfNeeded();
    
    // Check if button exists
    const button = edu.locator('button');
    if (await button.isVisible()) {
      await button.click();
      // Wait for animation or check class
      await page.waitForTimeout(1000); 
      const isRevealed = await page.evaluate(() => {
        return document.querySelector('#education') && !document.querySelector('button');
      });
      console.log(`Viewport ${viewport.width}x${viewport.height}: Interaction Works = ${isRevealed}`);
    }
  }
  await browser.close();
})();
