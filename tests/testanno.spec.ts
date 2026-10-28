import{test} from '@playwright/test'
test.describe("Logintest",()=>{
    test("validcredentials",async({page})=>{
    console.log("valid login test");
    
    })
    test("invalid credentials",async({page})=>{
        console.log("invalid login test");
        
    })
})

test ("timeout",async({page})=>{
    test.setTimeout(60000)
    await page.goto("https://www.amazon.com/")
})