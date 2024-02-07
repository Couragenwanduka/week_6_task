function cardValidation(cardNumber){
  // Define regex patterns for each card type

 // MasterCard numbers start with 5 or 2and are 16 digits long.
const masterCardPattern=/^2|5\d{3}\s\d{4}\s\d{4}\s\d{4}/;
// VisaCard numbers start with 4 and are 16 digits long
const visaCardPattern=/^4\d{3}\s\d{4}\s\d{4}\s\d{4}/;
// American Express numbers start with 3 and are 15 digits long
const americanExpressPattern=/^3\d{3}\s\d{4}\s\d{4}\s\d{3}/;
 

// Check if the card number matches any of the patterns
if(masterCardPattern.test(cardNumber)){
  return "Master Card";
}else if(visaCardPattern.test(cardNumber)){
  return "visa Card"
}else if (americanExpressPattern.test(cardNumber)){
  return "American Express"
}
 };

 const cardNumber="4187 4517 2824 0229";
 const cardtype= cardValidation(cardNumber);
 console.log('The card type is', cardtype)
