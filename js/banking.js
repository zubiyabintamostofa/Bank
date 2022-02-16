//handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){

    //get the amount deposited
   const depositInput =document.getElementById('deposit-input')
   const newDepositAmountText=depositInput.value;
   const newDepositAmount=parseFloat(newDepositAmountText);
   

   const depositTotal=document.getElementById('deposit-total');
   const previousDepositeText=depositTotal.innerText;


   const previousDepositeAmount=parseFloat(previousDepositeText);


   const newDepositTotal= previousDepositeAmount+newDepositAmount;




   

   depositTotal.innerText=newDepositTotal;
   //clear the input field
   depositInput.value='';
})