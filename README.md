## Credit Card Regular Expressions
This README provides an explanation of the regular expressions (regex patterns) used in the credit card validation methods in the provided JavaScript code.

## Regular Expressions Explained
# MasterCard

```Javascript
/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
```
 ^: Start of the string.<br>
 2|5: MasterCard numbers always start with the digit '5' or'2'.<br>
 \d: Matches any digit.

## VisaCard

```Javascript
/^3[47][0-9]{13}$/
```
 ^: Start of the string.<br>
 4: Visa card numbers always start with the digit '4'.<br>
 \d: Matches any digit.

## AmericanExpress

```Javascript
/^3\d{14}/
```
 ^: Start of the string.<br>
 3: American Express card numbers always start with the digit '3'.<br>
 \d: Matches any digit.

 ## Discover
 
```Javascript 
/^6011\d{12}|^65\d{14}/
```
 ^: Start of the string.<br>
 3: discover card numbers always start with the digit '6011' or "65".<br>
 \d: Matches any digit.

 ## verve
```javascript
/^506(0|1)\d{12}$/
```
  ^: Start of the string.<br>
 3:  verve card numbers always start with the digit '3'.<br>
 \d: Matches any digit.
 
 ## The luhnCheck Function 
 checks whether a given credit card number is valid according to the Luhn algorithm. It iterates through the digits of the card number, doubling every other digit and adjusting for cases where the result is greater than 9. It returns true if the checksum (the sum of all digits) is divisible by 10, indicating a valid card number.

## The cardValidation Function 
takes a card number as input and checks if it's valid based on its pattern and whether it passes the Luhn check. It uses regular expressions to match patterns for different card types: MasterCard, Visa, American Express, Discover, and Verve. If the card number passes the Luhn check and matches a specific pattern, it returns the corresponding card type. If not, it returns "Invalid Card".

## In the code execution section,
a sample card number is provided (cardNumber = "5399412261574698") and passed to the cardValidation function to determine its type. The result is then logged to the console.
# Conclusion
These regular expressions are designed to match the specific patterns of credit card numbers for MasterCard, Visa, and American Express cards. They ensure that the card numbers adhere to the correct format and length requirements for each card type.
