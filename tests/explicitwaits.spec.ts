import{test} from '@playwright/test'
test("element_based_waits",async({page})=>{
    await page.goto("https://www.amazon.in/")
    await page.getByPlaceholder('Search Amazon.in',{exact:true}).fill("shoes")

    //await page.locator(".s-suggestion-container").first().waitFor({timeout:20000,state:"detached"})

    await page.waitForSelector(".s-suggestion-container")

    let suggestions=await page.locator(".s-suggestion-container").allTextContents()

    console.log(suggestions);
})

test.only("waitFornavigation", async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    await Promise.all([
        page.waitForNavigation(),
        page.getByText("Check Box",{exact:true}).click()
    ])
    await expect(page).toHaveURL("https://demoapps.qspiders.com/ui/checkbox")
})