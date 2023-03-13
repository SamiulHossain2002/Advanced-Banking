
function getInput (inputId){
    const inputField= document.getElementById(inputId);
    const inputText = inputField.value;
    const inputAmmount=parseFloat(inputText);
     //console.log(inputAmmount);

     inputField.value="";

    return inputAmmount; // রিটার্ন না করলে এই ফাংশনের ক্যালকুলেট করা  ভ্যালু পাওয়া যাবে না.রিটার্ন সব সময় ফাংশনের ভেতরে হয় .ফাংশানের কার্লি  ব্রাকেটের {} মধ্যে.
}

// function (main) for add deposit & withdraw :

function updateTotal(updateId,newTotalAmmount){
    const updateTotal=document.getElementById(updateId);
    const previousUpdateTotal=updateTotal.innerText;
    const previousTotalAmmount= parseFloat(previousUpdateTotal);
    updateTotal.innerText =previousTotalAmmount + newTotalAmmount;
  

}


//function(main) for update balance-total:

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balace-total');
    const balanceTotalText =balanceTotal.innerText;
    const balanceTotalAmmount=parseFloat(balanceTotalText);
    
    return balanceTotalAmmount;
}

function updateBalance(ammount,isAdd){
    const balanceTotal = document.getElementById('balace-total');
    const previousBalanceTotalAmmount= getCurrentBalance();

    if(isAdd==true){
       balanceTotal.innerText = previousBalanceTotalAmmount + ammount;

    }else{
        balanceTotal.innerText= previousBalanceTotalAmmount - ammount;
    }

}



// function(called) works for deposit:
document.getElementById('deposit-button').addEventListener('click',function(){
    
    const newDepositAmmount=getInput ('deposit-input');
    if(newDepositAmmount>0){
        updateTotal('deposit-total',newDepositAmmount);
        updateBalance(newDepositAmmount,true);

    }
    
})

// function(called) works for withdraw:
document.getElementById('withdra-button').addEventListener('click',function(){

    const newWithdrawAmmount=getInput ('withdraw-input');
    const currentBalance = getCurrentBalance();

    if(newWithdrawAmmount > 0 && newWithdrawAmmount <= currentBalance){
        updateTotal('withdraw-total',newWithdrawAmmount);
        updateBalance(newWithdrawAmmount,false);
    }
   
})

