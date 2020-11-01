export default class Differnce {
    constructor(cards = null) {
        this.cards = document.querySelectorAll(cards);
        this.trigger = this.cards[this.cards.length - 1];
        this.cardsShown = 0;
    }

    hideCards() {
        this.cards.forEach(elem => {
            elem.style.display = "none";
        });
        this.trigger.style.display = "flex";
    }

    bindTriggers() {
        this.trigger.addEventListener('click', () => {
            if(this.cardsShown === this.cards.length - 2) {
                this.cards[this.cards.length - 2].style.display = "flex";
                this.cards[this.cards.length - 2].classList.add('fadeInUp', 'animated');
                this.trigger.style.display = "none";
            } else {
                this.cards[this.cardsShown].style.display = "flex";
                this.cards[this.cardsShown].classList.add('fadeInUp', 'animated');
                this.cardsShown++;
            }
        });
    }

    init() {
        try {
            this.hideCards();
            this.bindTriggers();
        } catch (error) {
            
        }
    }
}