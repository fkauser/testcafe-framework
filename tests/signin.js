import { Selector } from 'testcafe'
import SigninPage from '../src/object_repository/pages/SigninPage'


const dataset = require('../profiles/stage.json')
const signin_page = new SigninPage()

fixture`Load URL`
    .page(dataset.url)
    //.beforeEach()


test('Login Page', async t => {
    //Action
    signin_page.login()
    //Assertion
        await t     
        .expect(Selector('####').innerText)
        .contains('Welcome')
        
})