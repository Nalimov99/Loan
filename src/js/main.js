import mainSlider from './modules/slider/mainSlider';
import miniSlider from './modules/slider/miniSlider';
import VideoPlayer from './modules/playVideo';
import Differnce from './modules/differnce';
import Forms from './modules/services/forms';
import MainSlider from './modules/slider/mainSlider';
import Accordion from './modules/accordion';
import Download from './modules/download';



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

    const modulePageSlide = new MainSlider({
        container: '.moduleapp', 
        next: '.sidecontrol__controls .next', 
        logoBtn: '.sidecontrol > a',
        extraNext: '.module__info-controls .next',
        extraPrev: '.module__info-controls .prev'});
    modulePageSlide.init();

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

    const officerOld = new Differnce('.officerold .officer__card-item');
    officerOld.init();

    const officerNew = new Differnce('.officernew .officer__card-item');
    officerNew.init();

    const player = new VideoPlayer('.showup .play', '.overlay');
    player.play();
    const modulePlayer = new VideoPlayer('.module__video-item .play', '.overlay', true);
    modulePlayer.play();


    const joinForm = new Forms('.join__evolution form', '#fff');
    joinForm.init();

    const scheduleForm = new Forms('.schedule__form form', '#000');
    scheduleForm.init();


    const accordion = new Accordion('.module__info-show', '.msg');
    accordion.init();

    new Download('.download', 'assets/img/mainbg.jpg').init();

});