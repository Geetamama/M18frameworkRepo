import{test} from '@playwright/test'
test("getByMethods",async({page})=>{
    await page.goto("https://www.olympics.com/en/olympic-games/tokyo-2020")
    await page.click('text=See table')
    await page.click('menu-athletes')
    await page.waitForSelector('table')
    const goldMedals = await page.locator('tr:has-text("Emma") td:nth-child(2)').innerText();

  console.log(`Emma won ${goldMedals} gold medals.`)
})