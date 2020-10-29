import slider from './slider';

export default class miniSlider extends slider {
    constructor(container, next, prev, animate, autoplay, activeClass, fixBtn) {
        super(container, next, prev, animate, autoplay, activeClass, fixBtn);
        this.container.style.cssText = `
        display: flex;
        flex-wrap: wrap;
        align-items: start;
        overflow: hidden;
        `;
        this.next = this.next[0];
        this.prev = this.prev[0];
    }

    fixBtnInSlides() {
        this.slides.forEach(element => {
            if(element.tagName=="BUTTON") {
                this.container.insertBefore(element, this.slides[5]);
            }
        });
    }

    cardActive() {
        this.slides.forEach(element => {
            element.classList.remove(this.activeClass);
            if(this.animate) {
                element.querySelector('.card__title').style.opacity = '0.4';
                element.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });
        this.slides[0].classList.add(this.activeClass);
        if(this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }
    

    bindTriggers() {
        this.next.addEventListener('click', () => {
            this.container.appendChild(this.slides[0]);
            this.cardActive();
            if(this.fixBtn) {
                this.fixBtnInSlides();
            }
        });
        this.prev.addEventListener('click', () => {
            let lastSlide = this.slides[this.slides.length - 1];
            this.container.insertBefore(lastSlide, this.slides[0]);
            this.cardActive();
            this.fixBtnInSlides();
        });
    }

    autoplayFunc() {
        let pause;
        let activateAutoPlay = () => {
            pause = setInterval(() => {
                this.container.appendChild(this.slides[0]);
                this.cardActive();
            }, 5000);
        };
        activateAutoPlay();

        function bindTriggers(trigger) {
            trigger.addEventListener('mouseenter', () => {
                clearInterval(pause);
            });
            trigger.addEventListener('mouseleave', () => {
                activateAutoPlay();
            });
        }

        bindTriggers(this.next);
        bindTriggers(this.prev);
    }

    init() {
        this.bindTriggers();
        this.cardActive();
        if(this.autoplay) {
            this.autoplayFunc();
        }
        this.fixBtnInSlides();
    }
}