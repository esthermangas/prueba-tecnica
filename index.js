const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage('https://web.gencat.cat/ca/inici/');
    await page.goto('https://web.gencat.cat/ca/inici/');
    await page.fill('id=cercadorOcultGoogle', 'agenda cultural' );
    await page.click('.btn');
    setTimeout(() => {
        browser.close();
    }, 5000);

})();
