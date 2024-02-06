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
  cardValidation(cardNumber){
    // MasterCard numbers start with 5 and are 16 digits long.
     let number = /^2|5\d{3}\s\d{4}\s\d{4}\s\d{4}/.test(cardNumber)
  if(number === true){
    this.isMasterCard=true} 
  }
}
class VisaCard extends CreditCard{
  constructor(name,cvv,expireDate,cardNumber,bank){
    super(name,cvv,expireDate,cardNumber);
    this.bank=bank;
    this.isVisaCard=false
  }
  cardValidation(cardNumber){
   // VisaCard numbers start with 4 and are 16 digits long
    let number =/^4\d{3}\s\d{4}\s\d{4}\s\d{4}/.test(cardNumber)
    if(number === true){
      this.isVisaCard=true}  
  }
};

class AmericanExpress extends CreditCard{
  constructor(name,cvv,expireDate,cardNumber,country){
    super(name,cvv,expireDate,cardNumber)
    this.country=country;
    this.isAmericanExpress=false
  }
  cardValidation(cardNumber){
    // American Express numbers start with 3 and are 15 digits long
    let number =/^3\d{3}\s\d{4}\s\d{4}\s\d{3}/.test(cardNumber)
    if(number === true){
      this.isAmericanExpress=true}  
  }
}
const mastercard= new MasterCard("Ogechukwu Ani","233","30/1/2026","5399 4122 6157 4698");
const visacard= new VisaCard("Mmadu Ugwu","255","26/25/2023","4187 4517 2824 0229","Zenith");
const americanExpress=new AmericanExpress("obi cubana","444","14/4/2027","3187 4517 2824 029","Nigeria");
mastercard.cardValidation("5399 4122 6157 4698");
visacard.cardValidation("4187 4517 2824 0229");
americanExpress.cardValidation("3187 4517 2824 029");
console.log(mastercard);
console.log(visacard);
console.log(americanExpress);
