const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");
const availableNotes = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
     if (billAmount.value>0)
     {
        if(cashGiven.value>= billAmount.value)
        {
            const amountToBeReturned = cashGiven.value-billAmount.value; 
            calculateChange(amountToBeReturned);
        }
        else
        {
            showMessage("Do you want to wash plates?");
        }
     }
     else
     {
        showMessage("The bill amount must be greater than 0");
     }
});

function calculateChange(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++)
    {
        const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage()
{
    errorMessage.style.display ='none';
}
function showMessage(message){
    errorMessage.style.display ='block';
    errorMessage.innerText=message;
}