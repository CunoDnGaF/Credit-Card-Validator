export default function paymentSystemCheck(value) {
    let cardName;
    let cardNumber = value.split('');
    
    if(['34', '37'].includes(String(cardNumber[0] + cardNumber[1]))) {
        cardName = 'american-express';
    }

    if(['51', '52', '53', '54', '55'].includes(String(cardNumber[0] + cardNumber[1]))){
        cardName = 'mastercard';
    }

    if(cardNumber[0] === '4'){
        cardName = 'visa';
    }

    if(['36', '38'].includes(String(cardNumber[0] + cardNumber[1]))){
        cardName = 'diners';
    }

    if((String(cardNumber[0] + cardNumber[1]) === '65') ||
    (String(cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3]) === '6011')){
        cardName = 'discover';
    }

    if(cardNumber[0] === '2'){
        cardName = 'mir';
    }

    if(String(cardNumber[0] + cardNumber[1]) === '35'){
        cardName = 'jcb';
    }

    return cardName;
}