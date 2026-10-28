import { test } from "@playwright/test"
test("frame intr",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/")
    await page.locator('[name="mytext1"]').fill("hello")


//Approach1-->
// await page.frameLocator('//frame[@src="frame_1.html"]').locator('[name="mytext1"]')
// .fill("hello")

let frame1=await page.frameLocator('//frame[@src="frame_1.html"]')
await frame1.locator('[name="mytext1"]').fill("hello")
})

//Approach2-->
let frame2=await page.Locator('//frame[@src="frame_2.html"]').contentFrame()
await frame2.locator('[name="mytext2"]').fill("bye")



