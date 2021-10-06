import { Selector,t } from "testcafe"

class SignupPage {
    constructor(){
     

        this.email = Selector('#####')
        this.password = Selector('######')
        this.submit = Selector('#####')
        this.errorMessage = Selector('#####')

    }

}

export default SignupPage