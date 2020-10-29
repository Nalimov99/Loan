export default class Slider {
    constructor({
        container = null, 
        next = null,
        prev = null, 
        logoBtn = null,
        animate = null,
        autoplay = false,
        activeClass = null,
        fixBtn = false} = {}) {


        this.logoBtn = document.querySelectorAll(logoBtn);
        this.container=document.querySelector(container);
        this.slides=this.container.children;
        this.next=document.querySelectorAll(next);
        this.prev = document.querySelectorAll(prev);
        this.animate = animate;
        this.autoplay = autoplay;
        this.activeClass = activeClass;
        this.slideIndex=0;
        this.fixBtn = fixBtn;
    }
}