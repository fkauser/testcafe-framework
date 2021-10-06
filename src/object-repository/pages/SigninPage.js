import { Selector,t } from "testcafe"
const dataset = require('../../../profiles/stage.json')
class SigninPage {
    constructor(){
     

        this.email = Selector('####')
        this.password = Selector('####')
        this.submit = Selector('####')
        this.errorMessage = Selector('####')

    }

    async login() {
        await t
              .typeText(this.email, dataset.username, {paste: true, replace:true})
              .typeText(this.password, dataset.password, {paste: true, replace:true})
              .click(this.submit)
    }

}

export default SigninPage