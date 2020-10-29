import mainSlider from './modules/slider/mainSlider';
import miniSlider from './modules/slider/miniSlider';
import VideoPlayer from './modules/playVideo';



window.addEventListener('DOMContentLoaded', () => {
    const PageSlider = new mainSlider({container: ".page", next: ".sidecontrol__controls .next", logoBtn: '.sidecontrol > a'});
    PageSlider.init();

    const showUpSlider = new miniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const moduleSlider = new miniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        autoplay: true,
        animate: true
    });
    moduleSlider.init();

    const feedSlider = new miniSlider({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
        fixBtn: true
    });
    feedSlider.init();

    const player = new VideoPlayer('.play', '.overlay');
    player.play();


});