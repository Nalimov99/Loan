
export default class Accordion {
    constructor(triggers, message) {
        this.triggers = document.querySelectorAll(triggers);
        this.message = document.querySelectorAll(message);
    }

    bindTriggers() {
        this.triggers.forEach((element, i) => {
            element.addEventListener('click', () => {
                const hr = this.message[i].parentNode.querySelectorAll('hr')[1];
                const modeleInfo = this.message[i].parentNode.querySelector('.module__info-book');
                this.message[i].classList.add('animated');
                if(getComputedStyle(this.message[i], null).display == "none") {

                    this.message[i].style.display = "block";
                    this.message[i].style.marginTop = "10px";
                    this.message[i].classList.remove('zoomOut', 'fast');
                    this.message[i].classList.add('zoomIn');
                    hr.style.marginTop = '10px';
                    modeleInfo.style.paddingTop = "13px";
                } else {
                    this.message[i].classList.remove('zoomIn');
                    this.message[i].classList.add('zoomOut', 'fast');
                    this.message[i].addEventListener('animationend', () => {
                        if(this.message[i].classList.contains('zoomOut')) {
                            this.message[i].style.display = "none";
                            hr.style.marginTop = '25px';
                            modeleInfo.style.paddingTop = "24px";
                        }
                    });
                    
                }

            });
        });
    }

    init() {
        this.bindTriggers();
    }
}