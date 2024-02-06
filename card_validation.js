// Defining a Base class
class CreditCard{
  constructor(name,cvv,expireDate,cardNumber){
    this.name=name;
    this.cvv=cvv;
    this.expireDate=expireDate;
    this.cardNumber=cardNumber;
    if(this.constructor ===CreditCard){
      throw new Error('Sorry this class is private')
    }
  }
};

class MasterCard extends CreditCard{
  constructor(name,cvv,expireDate,cardNumber){
    super(name,cvv,expireDate,cardNumber);
    this.isMasterCard=false
  }
  cardVarlidation(cardNumber){
    // mastercard always starts with the number 2 or 5, the regular expression below checks if the first number fulfils that and also it also checks for the length master card has 16 numbers.
     let number = /^2|5\d{3}\s\d{4}\s\d{4}\s\d{4}/.test(cardNumber)
  if(number === true){
    this.isMasterCard=true} 
  }
}
class VisaCard extends CreditCard{
  constructor(name,cvv,expireDate,cardNumber,bank){
    super(name,cvv,expireDate,cardNumber,bank);
    this.bank=bank;
    this.isVisaCard=false
  }
  cardVarlidation(cardNumber){
    // visacard always starts with the number 4, the regular expression below checks if the first number fulfils that and also it also checks for the length visacard has 16number.
    let number =/^4\d{3}\s\d{4}\s\d{4}\s\d{4}/.test(cardNumber)
    if(number === true){
      this.isVisaCard=true}  
  }
};

class AmericanExpress extends CreditCard{
  constructor(name,cvv,expireDate,cardNumber,country){
    super(name,cvv,expireDate,cardNumber,country)
    this.country=country;
    this.isAmericanExpress=false
  }
  cardVarlidation(cardNumber){
    // visacard always starts with the number 3, the regular expression below checks if the first number fulfils that and also it also checks for the length american express card has 15 numbers.

    let number =/^3\d{3}\s\d{4}\s\d{4}\s\d{3}/.test(cardNumber)
    if(number === true){
      this.isAmericanExpress=true}  
  }
}
const Mastercard= new MasterCard("Ogechukwu Ani","233","30/1/2026","5399 4122 6157 4698");
const visacard= new VisaCard("Mmadu Ugwu","255","26/25/2023","4187 4517 2824 0229","Zenith");
const americanExpress=new AmericanExpress("obi cubana","444","14/4/2027","3187 4517 2824 029","Nigeria");
Mastercard.cardVarlidation("5399 4122 6157 4698");
visacard.cardVarlidation("4187 4517 2824 0229");
americanExpress.cardVarlidation("3187 4517 2824 029");
console.log(Mastercard);
console.log(visacard);
console.log(americanExpress);
