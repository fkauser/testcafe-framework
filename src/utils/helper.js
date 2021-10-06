import {Selector, t} from 'testcafe'
import SigninPage from '../object_repository/pages/SigninPage'

const signin_page = new SigninPage()
const dataset = require('../../profiles/stage.json')

/*
 * Pauses a test for a specified period of time
 * type : Number (1000)
 */

 export async function waitFor(milliseconds){
	 await t.wait(milliseconds)

}

/*
 * controls the emulation speed
 * range is between 1 (the fastest) and 0.01 (the slowest)
 * If this parameter is not specified, tests run at the maximum speed
 */

export async function speedController(speed){
	await t.setTestSpeed(speed)

}

