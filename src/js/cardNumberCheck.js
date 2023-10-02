export default function cardNumberCheck(value, paymentSystem){
    
    let cardNumber = value.split('');
    let reverseNumber = [];
    let sum = 0;

    if(paymentSystem === 'visa' && cardNumber.length === 13 || 
        paymentSystem === 'visa' && cardNumber.length === 16 || 
        paymentSystem === 'mastercard' && cardNumber.length === 16 || 
        paymentSystem === 'discover' && cardNumber.length === 16 || 
        paymentSystem === 'american-express' && cardNumber.length === 15 || 
        paymentSystem === 'diners' && cardNumber.length === 14 || 
        paymentSystem === 'jcb' && cardNumber.length === 15 || 
        paymentSystem === 'jcb' && cardNumber.length === 16 || 
        paymentSystem === 'jcb' && cardNumber.length === 19 || 
        paymentSystem === 'mir' && 16 <= cardNumber.length <= 19){
    for (let i = cardNumber.length - 1; i >= 0; i--) {
            reverseNumber.push(Number(cardNumber[i]));
    }
        
    let checkDigit = reverseNumber.shift();

    for (let i = 0; i < reverseNumber.length; i+=2) {
        let a = reverseNumber[i]*2;
        
        if(a < 9) {
            reverseNumber[i] = a;
        }

        if(a > 9) {
            reverseNumber[i] = a - 9;
        }
    }

    reverseNumber.forEach((e)=> sum += e);


    if(10-(sum%10) === checkDigit) {
        return true;
    } else {
        throw new Error('Карта не существует');
    }

} else {
    throw new Error('Некорректная длина номера для вашей платёжной системы');
}

}