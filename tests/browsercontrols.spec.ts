import{chromium,firefox, test} from '@playwright/test'
// // test("browsercontrols",async({page})=>{
// //     await page.goto("https://www.amazon.com/")
// //     //fetch the viewport size
// //     let size=await page.viewportSize()
// //     console.log(size);
// //     //set the viewport size
// //     await page.setViewportSize({width:1000,height:500})
// //     let size1=await page.viewportSize()
// //     console.log(size1)  
// //     //navigate to page
// //     await page.goto("https://www.flipkart.com/")
// //     //fetch the title
// //     let title = await page.title()
// //     console.log(title)
// //     //fetch the URL
// //     let url= await page.url()
// //      console.log(url)
    
// // })
// // test.only("cookie",async({browser})=>{
// //     let context = await browser.newContext()
// //     let page = await context.newPage()
// //     await page.goto("https://www.amazon.com/")
// //     let cookies = await context.cookies()
// //     console.log(cookies)
    
// // })


//chromium launch

test.only("instance",async()=>{
    let browser = await chromium.launch()
    let context = await browser.newContext()
    let page =await context.newPage()
    await page.goto("https://www.google.com/")
    browser.close()

})

//taking screensort of a page
// test.only("ss",async({page})=>{
//     await page.goto("https://www.amazon.com/")
//     await page.screenshot({path:"screenshot/ss.png"})
//     //test.setTimeout(60000)
//     // to take multiple screenshot
//     let time=new Date().getTime()
//     await page.screenshot({path:`screenshot/page${time}.png`})
// })