import Slider from './slider';

export default class MainSlider extends Slider{
    constructor(next, logoBtn) {
        super(next, logoBtn);
        this.showUp = document.querySelector('.hanson');
        this.showUpIndex=2;
        this.showUp.style.opacity='0';

    }
    


    showSlide(n = 0) {
        super.showSlide(n);
 
        if(this.slideIndex === this.showUpIndex) {
            if(this.showUp.classList.contains('animated')) {
                this.showUp.classList.remove('slideInUp');
            } else {
                setTimeout(() => {
                    this.showUp.style.opacity = '1';
                    this.showUp.classList.add('animated', 'slideInUp'); 
                }, 3000);
            }
        }

    }

    render() {
        super.render();
        this.logoBtn.forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();
                this.showSlide();
                this.slideIndex = 0;
            });
        });
    }
}