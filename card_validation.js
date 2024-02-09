 // function Luhncheck() checks if the number is a truly a credit card
 
   function luhnCheck(cardNumber) {
    let checksum = 0; // running checksum total
    let j = 1; // takes value of 1 or 2
  
    // Process each digit one by one starting from the last
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let calc = 0;
      // Extract the next digit and multiply by 1 or 2 on alternative digits.
      calc = Number(cardNumber.charAt(i)) * j;
  
      // If the result is in two digits add 1 to the checksum total
      if (calc > 9) {
        checksum = checksum + 1;
        calc = calc - 10;
      }
  
      // Add the units element to the checksum total
      checksum = checksum + calc;
  
      // Switch the value of j
      if (j == 1) {
        j = 2;
      } else {
        j = 1;
      }
    }
    //Check if it is divisible by 10 or not.
    return (checksum % 10) == 0;
    
  }
  function cardValidation(cardNumber){
    // Define regex patterns for each card type
  
   // MasterCard numbers start with 5 or 2and are 16 digits long.
  const masterCardPattern=/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/;
  // VisaCard numbers start with 4 and are 16 digits long
  const visaCardPattern=/^3[47][0-9]{13}$/;
  // American Express numbers start with 3 and are 15 digits long
  const americanExpressPattern=/^3\d{3}\s\d{4}\s\d{4}\s\d{3}/;
  // Discover number can start with 65 or 6011 and 16 digits long
  const Discover= /^6011\d{12}|^65\d{14}/
  // verve number can start with 5060 or 5061 and are 16 digits long
  const verve= /^506(0|1)\d{12}$/
   
  // Check if the card number matches any of the patterns
  if( luhnCheck(cardNumber)=== true){
  if(masterCardPattern.test(cardNumber)){
    return "Master Card";
  }else if(visaCardPattern.test(cardNumber)){
    return "visa Card"
  }else if (americanExpressPattern.test(cardNumber)){
    return "American Express"
  }
} else{
    return "Invaild Card"

}
   }
  const cardNumber="5399412261574698";
 // const luhnCheck1 = luhnCheck("5399412261574698")
   const cardtype= cardValidation(cardNumber);
   console.log('The card type is', cardtype);
   //console.log(luhnCheck1)
