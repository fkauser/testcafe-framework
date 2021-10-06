import { Selector } from 'testcafe'
import xPathToCss from 'xpath-to-css'
const dataset = require('../profiles/stage.json')

fixture`Getting Started`
        .page(dataset.url)
    


test('My First Test', async t => {
    
//convert xpath to css
const xpathField = '//*[@id="developer-name"]'
const cssPath = xPathToCss(xpathField)	
console.log('************' + cssPath)

await t
    .typeText(Selector('input#developer-name'), dataset.username)
    .setNativeDialogHandler(() => true)
     .click('#populate');
    
	
})