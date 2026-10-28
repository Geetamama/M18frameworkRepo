import { test, expect } from '@playwright/test';



test.only("multiselect dropdown", async({page})=>{

    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator("#select-multiple-native").selectOption([{Fjallraven - 
        Foldsack No. 1 Backpack, Fits 15 Laptops"},{Value:"Mens Casual Premium Slim 
            Fit T-Shirts "},{Value:"Mens casual slim Fit"}])

    //Selecting multiple optons through value


    //optional using keyboard actions
    await page.getByTitle(""Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    {exact:true}).click()

    await page.keyboard.press("shift+ArrowDown")
    await page.keyboard.press("shift+ArrowDown")
    await page.keyboard.press("shift+ArrowDown")
        
await page.getByRole("button",{name:"Add"}).click()
})