import paymentSystemCheck from "./paymentSystemCheck";
import cardNumberCheck from "./cardNumberCheck";

export default class Widget {
    constructor(elem) {
      this.number = elem.querySelector(".card-number");
      this.button = elem.querySelector(".card-button");
      this.icons = elem.querySelectorAll(".icon");
      this.paymentSystem = '';
    }

    startWidget() {
      this.cardIconActivator();
      this.cardValidator();
    }

    cardValidator() {
      this.button.addEventListener('click', () => {
        if(cardNumberCheck(this.number.value, this.paymentSystem)) {
          alert('Карта существует, ваша платёжная система ' + this.paymentSystem);
        }
      });
    }
    
    cardIconActivator() {
      this.number.addEventListener('input', () => {
        let paymentSystem = paymentSystemCheck(this.number.value);
        this.paymentSystem = paymentSystem;
        
        for (let i = 0; i < this.icons.length; i++) {
          if (this.icons[i].classList.contains(paymentSystem)){
            this.icons[i].classList.add('active');
          } else {
            this.icons[i].classList.remove('active');
          }
        }
      });
    }

  }