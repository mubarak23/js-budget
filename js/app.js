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
    const total = parseInt(this.budgetAmount.textcontent) - expense;
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
      let amount = parseInt(amountValue);
      this.expenseInput.value = '';
      this.amountInput.value = '';
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
      this.showBalance();

    }
  }

 //add expense  
  addExpense(expense){
    const div = document.createElement('div');
    div.classList.add('expense');
    div.innerHTML = `
    <div class="expense-item d-flex justify-content-between align-items-baseline">

    <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
    <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

    <div class="expense-icons list-item">

     <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
      <i class="fas fa-edit"></i>
     </a>
     <a href="#" class="delete-icon" data-id="${expense.id}">
      <i class="fas fa-trash"></i>
     </a>
    </div>
   </div>
    `;
    this.expenseList.appendChild(div);
  }

  //edit expense method
  editExpense(element){
    let id = parseInt(element.dataset.id);
    let parent = element.parentElement.parentElement.parentElement;
    //remove from dom
    this.expenseList.removeChild(parent);
    //remove from the dom
    let expense = this.itemList.filter(function(item){
        return item.id === id;
    })
    //show item
    this.expenseInput.value = expense[0].title
    this.amountInput.value = expense[0].amount;
    console.log(expense[0].title);
    console.log(expense[0].amount);
    //remove from the list
    let tempList = this.itemList.filter(function(item){
        return item.id !== id;
    })
    //append tempList to itemList
    this.itemList = tempList;
    this.showBalance();

  }

  //delete expense list method
  deleteExpense(element){


  }
  //total expense
  TotalExpense(){
    let total ;

    if(this.itemList.length > 0){
       console.log(this.itemList);
       total = this.itemList.reduce(function(acc, curr){
        console.log(`Total is ${acc} and the current value ${curr.amount}`);
        acc +=curr.amount;
        return acc;
       }, 0) 
    }
    this.expenseAmount.textcontent = total

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
  //console.log(event.target);
  if(event.target.parentElement.classList.contains('edit-icon')){
    ui.editExpense(event.target.parentElement);
  }else if(event.target.parentElement.classList.contains('delete-icon')){
    ui.deleteExpense(event.parentElement);
  }

})


}

document.addEventListener('DOMContentLoaded', function(){
  eventListeners();

})