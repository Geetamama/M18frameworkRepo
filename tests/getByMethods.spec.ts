import{test} from '@playwright/test'
test("getByMethods",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    //getByLabel
    await page.getByLabel("Name").fill("Pooja")
    //getByPlaceholder
    await page.getByPlaceholder("Enter Your Email").fill("pooja@gmail.com")
    //getByText
    await page.getByText("Register").last().click()
    //getByAltText
    // await page.getByAltText("signin").click()
    // await page.goto("https://demowebshop.tricentis.com/")
    // await page.getByAltText("Tricentis Demo Web Shop").click()
    //click on with tool tip emlement
    await page.getByText("With ToolTip").click()
    await page.getByTitle("Enter your Name").fill("pooja")

    await page.goto("https://demowebshop.tricentis.com/")
    await page.getByRole("textbox").first().fill("computers")
    await page.getByRole("button",{name:'Search'}).click()// take search from accessibility(inspect search)
    //getByTestId
    await page.goto("https://www.saucedemo.com/")
    await page.getByTestId("username").fill("pooja")
})
