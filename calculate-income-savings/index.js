//  expenses part 

document.getElementById('calc-btn').addEventListener('click',function(){

const foodInput = document.getElementById('food-price');

const foodPrice = foodInput.value;
const rentInput = document.getElementById('rent-price');
const rentPrice = rentInput.value;
const clothesInput = document.getElementById('clothes-price') ;
const clothesPrice = clothesInput.value;
const totalCosts = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);
if(foodPrice>0 && rentPrice>0 && clothesPrice>0){
 
 const totalExpensesSelect = document.getElementById('total-expenses');
 totalExpensesSelect.innerText = totalCosts;
} 
else {
    alert("please provide valid input");
}
// balance part 
 const incomeSelect = document.getElementById('income-input');
 const incomeAll = incomeSelect.value;
 const balanceSelect = document.getElementById('balance-select')
 const balance = balanceSelect.innerText; 
 const balanceFirst = parseFloat(incomeAll) - parseFloat(totalCosts);

if(incomeAll>0 && totalCosts<incomeAll){
   
    balanceSelect.innerText = balanceFirst;
}
else{
    alert("please provide a valid input")
}

// savings part 
document.getElementById('save-btn').addEventListener('click',function(){
    const saveInput = document.getElementById('save-input');
    const saveInputValue = parseFloat(saveInput.value);
    if(saveInput.value>0){
        const savingAmount =parseFloat(balanceFirst /saveInputValue) ;
        const savingValue = document.getElementById('saving-value')
        savingValue.innerText = savingAmount;
        const remainingValue = document.getElementById('remaining-value');
        remainingValue.innerText = balanceFirst - savingAmount;
    }
    else{
        alert("please provide a valid input");
    }

    // clr saving percentage 
    saveInput.value ='';
})


// clr input field 
foodInput.value = '';
rentInput.value = '';
clothesInput.value = '';
incomeSelect.value = '';



})

    
    

// //  expenses part 

// document.getElementById('calc-btn').addEventListener('click',function(){

// const foodInput = document.getElementById('food-price');

// const foodPrice = foodInput.value;
// const rentInput = document.getElementById('rent-price');
// const rentPrice = rentInput.value;
// const clothesInput = document.getElementById('clothes-price') ;
// const clothesPrice = clothesInput.value;
// const totalCosts = parseFloat(foodPrice) + parseFloat(rentPrice) + parseFloat(clothesPrice);
// if(foodPrice>0 && rentPrice>0 && clothesPrice>0){
 
//  const totalExpensesSelect = document.getElementById('total-expenses');
//  totalExpensesSelect.innerText = totalCosts;
// } 
// else {
//     alert("please provide valid input");
// }
// // balance part 
//  const incomeSelect = document.getElementById('income-input');
//  const incomeAll = incomeSelect.value;
//  const balanceSelect = document.getElementById('balance-select')
//  const balance = balanceSelect.innerText; 
//  const balanceFirst = parseFloat(incomeAll) - parseFloat(totalCosts);

// if(incomeAll>0 && totalCosts<incomeAll){
   
//     balanceSelect.innerText = balanceFirst;
// }
// else{
//     alert("please provide a valid input")
// }

// // savings part 
// document.getElementById('save-btn').addEventListener('click',function(){
//     const saveInput = document.getElementById('save-input');
//     const saveInputValue = parseFloat(saveInput.value);
//     if(saveInput.value>0){
//         const savingAmount =parseFloat(balanceFirst /saveInputValue) ;
//         const savingValue = document.getElementById('saving-value')
//         savingValue.innerText = savingAmount;
//         const remainingValue = document.getElementById('remaining-value');
//         remainingValue.innerText = balanceFirst - savingAmount;
//     }
//     else{
//         alert("please provide a valid input");
//     }

//     // clr saving percentage 
//     saveInput.value ='';
// })


// // clr input field 
// foodInput.value = '';
// rentInput.value = '';
// clothesInput.value = '';
// incomeSelect.value = '';



// })

    
    

