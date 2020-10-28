import mainSlider from './modules/slider/mainSlider';
import VideoPlayer from './modules/playVideo';



window.addEventListener('DOMContentLoaded', () => {
    const PageSlider = new mainSlider({container: ".page", next: ".sidecontrol__controls .next", logoBtn: '.sidecontrol > a'});
    PageSlider.render();


    const player = new VideoPlayer('.play', '.overlay');
    player.play();


});