class UI {
  constructor() {

    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }

  //submit budget class
  submitBugetForm(){
    console.log("Hello From submit Budget ES6 Method");
    const value = this.budgetInput.value;
    console.log(value);
    //check if the value is zero or less than 1
    if(value === '' || value < 0){
      this.budgetFeedback.classList.add('showItem');
      this.budgetFeedback.innerHTML = `<p>Value Cannot Negative or Empty </p>`;
      const self = this; 
      console.log(this);
      setTimeout(function(){
        //console.log(this);
        //console.log(self);
        self.budgetFeedback.classList.remove('showItem');
        
      }, 4000)
    }else{
      this.budgetAmount.textContent = value;
      this.budgetInput.value = '';
      this.showBalance();
    }
  }
  //show balance method
  showBalance(){
    //console.log(`THIS keyword is magical`);
    const expense = this.TotalExpense();
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;
    if(total < 0){
      this.balance.classList.remove('showGreen', 'showBlack');
      this.balance.classList.add('showRed');
    }else if(total > 0){
      this.balance.classList.remove('showRed', 'showBlack');
      this.balance.classList.add('showGreen');
    }else if(total === 0){
      this.balance.classList.remove('showRed', 'showGreen');
      this.balance.classList.add('showBlack');
    }
  }
  //submit expense Form
  submitExpenseForm(){
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;

    //check expense value
    if(expenseValue === '' || amountValue === '' || amountValue < 0){
          this.expenseFeedback.classList.add('showItem');
          this.expenseFeedback.innerHTML = `<p>Values cannot be empty or Negative</p>`;
          const self = this;
          setTimeout(function(){
              self.expenseFeedback.classList.remove('showItem')
          }, 4000);
    }else{
      let amount = parent(amountValue);
      this.expenseInput = '';
      this.amountInput = '';
      let expense = {
        id: this.itemID,
        title: expenseValue,
        amount: amount
      }
      this.itemID++;
      this.itemList.push(expense);
      //add expense method
      this.addExpense(expense);
      //show balance

    }
  }

 //add expense  

  //total expense
  TotalExpense(){
    let total = 4000;
    return total;
  }

}


function eventListeners(){
const budgetForm = document.getElementById('budget-form');
const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

//create a new instance of UI class
const ui = new UI();

//budget form submit
budgetForm.addEventListener('submit', function(event){
  event.preventDefault();
  ui.submitBugetForm();
});
//expense form submit
expenseForm.addEventListener('submit', function(event){
  event.preventDefault();
  ui.submitExpenseForm();
})

//expense click
expenseList.addEventListener('click', function(event){

})


}

document.addEventListener('DOMContentLoaded', function(){
  eventListeners();

})