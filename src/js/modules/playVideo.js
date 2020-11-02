export default class VideoPlayer {
    constructor(triggers, overlay = ".overlay", isNextLocked = false) {
        this.triggers = document.querySelectorAll(triggers);
        this.overlay=document.querySelector(overlay);
        this.close=this.overlay.querySelector('.close');
        this.isNextLocked = isNextLocked;
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    createIframe(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange
              }

            });
    }

    onPlayerStateChange(event) {
        if(this.isNextLocked) {
            const blockedElem = this.activeBtn.closest('.module__video-item').nextElementSibling;
            const playBtn = this.activeBtn.querySelector('svg').cloneNode(true);

            if(blockedElem.tagName !== "BUTTON" && event.data === 1) {
                const blockedSvg = blockedElem.querySelector('.play__circle');
                blockedSvg.classList.remove('closed');
                blockedSvg.querySelector('svg').remove();
                blockedSvg.appendChild(playBtn);

                const blockedText = blockedElem.querySelector('.play__text');
                blockedText.classList.remove('attention');
                blockedText.textContent = "PLAY VIDEO";

                blockedElem.setAttribute('data-locked', 'false');
                blockedElem.style.opacity = 1;
                blockedElem.style.filter = "none";
                blockedElem.filter = "none";
                
            }
        }
    }

    bindTriggers() {
        this.triggers.forEach((trigger, i) => {
            if(this.isNextLocked) {
                if(i % 2 == 0) {
                    trigger.closest('.module__video-item').setAttribute('data-locked', 'false');
                }

                else {
                    trigger.closest('.module__video-item').setAttribute('data-locked', 'true');  
                }
            }

            trigger.addEventListener('click' , () => {
                if(!this.isNextLocked || trigger.closest('.module__video-item').getAttribute('data-locked') === 'false') {
                    this.activeBtn = trigger;
                    this.overlay.style.display = 'flex';
                    const path = trigger.getAttribute('data-url');
                    this.createIframe(path);
                } 
            });
        });
    }

    bindClose() {
        this.overlay.addEventListener('click', (e) => {
            let target=e.target;
            if(target==this.overlay || target==this.close) {
                if(this.player) {
                    this.player.destroy();
                }
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