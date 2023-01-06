const puppeteer = require('puppeteer')
const fs = require('fs/promises')
//need to use await syntax inside async function 

async function start(){
    const browser = await puppeteer.launch() //because it needs to launch browser and we dont know how long it will take
    const page = await browser.newPage()
    await page.goto("https://learnwebcode.github.io/practice-requests/")
    //await page.screenshot({path: "amazing.png"})// you can customize size of window
    
    //get name of each cat and output into a txt in harddrive
    //get array of string and output to text file

    const names = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent)

    })
    await fs.writeFile("names.txt", names.join("\r\n"))
    await browser.close()
}

start()