export default class Slider {
    constructor(page, btns) {
        this.page=document.querySelector(page);
        this.slides=this.page.children;
        this.btns=document.querySelectorAll(btns);
        this.slideIndex=0;
    }

    hideSlides() {
        this.slides.forEach(item => {
            item.style.display = "none";
        });
    }

    showSlide(n) {
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
        this.hideSlides();
        this.showSlide(this.slideIndex);
        this.btns.forEach(currentItem => {
            currentItem.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSlide(++this.slideIndex);
            });


            currentItem.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.hideSlides();
                this.showSlide(0);
            });
        });
        
    }
}