import {test} from "@playwright/test";
import excel from "exceljs";
import path from "path";

test ("read single data",async(page)=>{
    let book =new excel.workbook()
    await book.xlsx.readfile(path.join(_dirname,"../DDT\excelfile1.xlsx"))

    let sheet =await book.getWorksheet("Sheet1")
    let data1 =await sheet?.getRow(1).getCell(1).toString()
    console.log(data1);
    
    let data2=await sheet!.getRow(1).getCell(2).toString()
    console.log(data2);

    let data3=await sheet?.getRow(2).getCell(1).toString()
    console.log(data3);
    
})