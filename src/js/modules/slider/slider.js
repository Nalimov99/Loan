export default class Slider {
    constructor({
        container = null, 
        next = null,
        prev = null, 
        logoBtn = null,
        animate = null,
        autoplay = false,
        activeClass = null,
        fixBtn = false,
        extraNext = null,
        extraPrev = null} = {}) {


        this.logoBtn = document.querySelectorAll(logoBtn);
        this.container=document.querySelector(container);
        try {
            this.slides=this.container.children;
        } catch (error) {
            
        }
        this.next=document.querySelectorAll(next);
        this.prev = document.querySelectorAll(prev);
        this.extraNext=document.querySelectorAll(extraNext);
        this.extraPrev = document.querySelectorAll(extraPrev);
        this.animate = animate;
        this.autoplay = autoplay;
        this.activeClass = activeClass;
        this.slideIndex=0;
        this.fixBtn = fixBtn;
    }
}