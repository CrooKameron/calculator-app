class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete(){
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
    appendNumber(number){
        if(number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString() 
    }
    chooseOperation(operation){
        if (this.currentOperand === '')  return; 
        if(this.previousOperand != ''){
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    compute(){
        let computation
        const prev = parseFloat(this.currentOperand)
        const current = parseFloat(this.previousOperand)
        if(isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break

            case '-':
                computation = prev - current
                break

            case 'x':
                computation = prev * current
                break

            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)){
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })    
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        } else{
            return integerDisplay
        }

    }
    updateDisplay(){
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)
        if(this.operation != null){
            this.previousOperandTextElement.innerText = 
             `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const evrything = document
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


const calculator = new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})



operationButtons.forEach(button => {
    button.addEventListener('click',()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})


equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

 
allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})


deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})























// main keys
window.addEventListener('keydown', (event) =>{
    if (event.key == "Enter") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "Backspace") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == " ") {
        console.log(event.key)
        console.log("space key is invisible")
    }
})


// symbols
window.addEventListener('keydown', (event) =>{
    if (event.key == "+") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "-") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "*" || event.key == "x") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "/") {
        console.log(event.key)
    }
})



// numbers
window.addEventListener('keydown', (event) =>{
    if (event.key == "0") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "1") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "2") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "3") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "4") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "5") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "6") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "7") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "8") {
        console.log(event.key)
    }
})
window.addEventListener('keydown', (event) =>{
    if (event.key == "9") {
        console.log(event.key)
    }
})





