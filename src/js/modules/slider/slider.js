export default class Slider {
    constructor({container = null, next = null, prev = null, logoBtn = null} = {}) {
        this.logoBtn = document.querySelectorAll(logoBtn);
        this.container=document.querySelector(container);
        this.slides=this.container.children;
        this.next=document.querySelectorAll(next);
        this.prev = document.querySelector(prev);
        this.slideIndex=0;
    }

    hideSlides() {
        this.slides.forEach((item, i) => {
            item.style.display = "none";
        });
    }

    showSlide(n = 0) {
        if(n>this.slides.length - 1) {
            n=0;
            this.slideIndex=n;
        }
        if(n<0) {
            n=this.slides.length - 1;
            this.slideIndex=n;
        }
        this.hideSlides();
        this.slides[n].style.display="block";
    }

    

    render() {
        this.showSlide();
        try {
            this.next.forEach(element => {
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showSlide(++this.slideIndex);
                });
            });
    
            this.prev.forEach(element => {
                element.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.showSlide(--this.slideIndex);
                });
            });
        } catch (error) {
            
        }
    }
}