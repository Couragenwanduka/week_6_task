## Credit Card Regular Expressions
This README provides an explanation of the regular expressions (regex patterns) used in the credit card validation methods in the provided JavaScript code.

## Regular Expressions Explained
# MasterCard
```javascript
Copy code
/^2|5\d{3}\s\d{4}\s\d{4}\s\d{4}/
```
 ^: Start of the string.<br>
 2|5: MasterCard numbers always start with the digit '5' or'2'.<br>
 \d: Matches any digit.

## VisaCard
```javascript
Copy code
/^4\d{3}\s\d{4}\s\d{4}\s\d{4}/
```
 ^: Start of the string.<br>
 4: Visa card numbers always start with the digit '4'.<br>
 \d: Matches any digit.

## AmericanExpress
```javascript
Copy code
/^3\d{3}\s\d{4}\s\d{4}\s\d{3}/
```
 ^: Start of the string.<br>
 3: American Express card numbers always start with the digit '3'.<br>
 \d: Matches any digit.

# Conclusion
These regular expressions are designed to match the specific patterns of credit card numbers for MasterCard, Visa, and American Express cards. They ensure that the card numbers adhere to the correct format and length requirements for each card type.
