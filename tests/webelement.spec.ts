import{test} from '@playwright/test'
// test.only("test2",async({page})=>{
//  await page.goto("https://www.amazon.in/")
//  await page.getByPlaceholder("Search Amazon.in",{exact:true}).fill("shoes")

//  let text1 = await page.locator('.s-suggestion-container').nth(9).textContent()
//  console.log(text1);

// //  await page.locator('.s-suggestion-container').first().waitFor()

// //   let text = await page.locator('.s-suggestion-container').allTextContents()
// //  console.log(text);
// })

test.only("test3",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")

    await page.locator('#name').waitFor()
    let res1=await page.locator('#name').isVisible()
    let res2=await page.locator('#name').isEditable()
    let res3=await page.locator('#name').isEnabled()
    let res4=await page.locator('#name').isDisabled()
    let res5=await page.locator('#name').isChecked()

    console.log(res1);
    console.log(res2);
    console.log(res3);
    console.log(res4);
    console.log(res5);
    

})