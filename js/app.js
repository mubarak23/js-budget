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
})

//expense click
expenseList.addEventListener('click', function(event){

})


}

document.addEventListener('DOMContentLoaded', function(){
  eventListeners();

})