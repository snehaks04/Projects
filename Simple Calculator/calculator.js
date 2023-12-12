class calculator{
    constructor(previous,current){
        this.previous=previous;
        this.current = current;
        this.clear();
        // this.appendNumber(current)
    }
    clear(){
    this.currentOperand=' ';
    this.previousOperand='';
    this.operation=undefined;
    }
    delete(){
this.currentOperand=this.currentOperand.toString().slice(0,-1)
    }
    appendNumber(number){
        if(number=='.' && this.currentOperand.includes('.')) return;
        this.currentOperand=this.currentOperand.toString()+number.toString()
    }
    chooseOperation(operation){
        if(this.currentOperand==='') return
        if(this.previousOperand!==''){
            this.compute();
        }
        this.operation=operation;
        this.previousOperand=this.currentOperand;
        this.currentOperand='';
    }
    compute(){
        let computation;
        const p=parseFloat(this.previousOperand);
        const c=parseFloat(this.currentOperand);
        if (isNaN(p)|| isNaN(c)) {
            return;
        }
        switch(this.operation){
            case '+':
                computation=p+c;
                break;
            case '-':
                computation=p-c;
                break;
            case '*':
                computation=p*c;
                break;
            case '/':
                computation=p/c;
                break;
          default:
            return;
    }
    this.currentOperand=computation
    this.operation=undefined
    this.previousOperand=''
}


getDisplayNumber(number){
    const stringNum=number.toString();
    const integerDigits= parseFloat(stringNum.split('.')[0]);
    const decimalDigits=parseFloat(stringNum.split('.')[1]);
    let integerDisplay
    if(isNaN(integerDigits)){
        integerDisplay='';
    }else{
        integerDisplay=integerDigits.toLocaleString('en',{maximumFractionDigits:0})
    }
    const floatNumber=parseFloat(number);
    if(isNaN(floatNumber)) return ''
    return number.toLocaleString('en');
}
    updateDisplay(){
        this.current.innerText=this.getDisplayNumber(this.currentOperand)
        if(this.operation!=null){
        this.previous.innerText= `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        }else{
            this.previous.innerText=''
        }
    }
}

const numbuttons=document.querySelectorAll('[data-number]');
const operations=document.querySelectorAll('[data-operation]');
const equals=document.querySelector('[data-equals]');
const del=document.querySelector('[data-delete]');
const allClear=document.querySelector('[data-allclear]');
const previous=document.querySelector('[data-previous]');
const current=document.querySelector('[data-current]');

const calcii = new calculator(previous,current);

numbuttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        calcii.appendNumber(button.innerText);
        calcii.updateDisplay();

    });
});
operations.forEach((button)=>{
    button.addEventListener('click', ()=>{
        calcii.chooseOperation(button.innerText);
        calcii.updateDisplay();

    });
});
equals.addEventListener('click', button =>{
    calcii.compute();
    calcii.updateDisplay();
});
allClear.addEventListener('click', button =>{
    calcii.clear();
    calcii.updateDisplay();
});
del.addEventListener('click', button =>{
    calcii.delete();
    calcii.updateDisplay();
});