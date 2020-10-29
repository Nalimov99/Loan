import Slider from './slider';

export default class MainSlider extends Slider{
    constructor(next, logoBtn) {
        super(next, logoBtn);
        this.show = document.querySelector('.hanson');
        this.showUpIndex=2;
        this.show.style.opacity='0';
    }
    
    showUp() {
        if(this.slideIndex === this.showUpIndex) {
            if(this.show.classList.contains('animated')) {
                this.show.classList.remove('slideInUp');
            } else {
                setTimeout(() => {
                this.show.style.opacity = '1';
                this.show.classList.add('animated', 'slideInUp'); 
                }, 3000);
            }
        }
    }
    hideSlides() {
        this.slides.forEach((item) => {
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
        this.showUp();
    }
    

    BindLogo() {
        this.logoBtn.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSlide();
                this.slideIndex = 0;
            });
        });   
    }
    
    bindTrigger() {
        this.next.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSlide(++this.slideIndex);
            });
        });
    }

    init() {
        this.BindLogo();
        this.bindTrigger();
    }
}