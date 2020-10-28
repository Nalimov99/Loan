export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.triggers = document.querySelectorAll(triggers);
        this.overlay=document.querySelector(overlay);
        this.close=this.overlay.querySelector('.close');
    }

    createIframe(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url
            });
    }

    bindTriggers() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click' , () => {
                this.overlay.style.display = 'flex';
                const path = trigger.getAttribute('data-url');
                this.createIframe(path);
            });
        });
    }

    bindClose() {
        this.overlay.addEventListener('click', (e) => {
            let target=e.target;
            if(target==this.overlay || target==this.close) {
                this.player.destroy();
                this.overlay.style.display='none';
            }
        });
    }


    play() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindTriggers();
        this.bindClose();
    }
}