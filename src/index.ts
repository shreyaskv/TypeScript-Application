
import ITEmployee from './classes/ITEmployee.js'
import { ListTemplate } from './classes/ListTemplate.js'
import NonITEmployee from './classes/NonITEmployee.js'
import Helpers from './helpers/helpers.js'
import { iSummary } from './interfaces/summary.js'

const form = document.querySelector('form')!
const departmentElm = document.querySelector('#department') as HTMLSelectElement
const nameElm = document.querySelector('#name') as HTMLInputElement
const ageElm = document.querySelector('#age') as HTMLInputElement
const isHeadElm = document.querySelector('#departmentHead') as HTMLSelectElement
const emailElm = document.querySelector('#email') as HTMLInputElement

const ul = document.querySelector('ul')!

const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let type: iSummary
    let values: [string, string, number, boolean, string]
    values = [departmentElm.value, nameElm.value, ageElm.valueAsNumber, Helpers.strToBol(isHeadElm.value), emailElm.value]
    if (departmentElm.value === 'IT') {
        type = new ITEmployee(...values)
    } else {
        type = new NonITEmployee(...values)
    }
    list.render(type, departmentElm.value, "end")
})

const clear = document.querySelector('#clear') as HTMLButtonElement

clear.addEventListener('click', () => {
    ul.innerHTML = ""
    form.reset()
})
