const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");


checkButton.addEventListener("click",()=>console.log("clicked",billAmount.value,cashGiven.value));