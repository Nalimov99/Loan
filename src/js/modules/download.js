export default class Download {
    constructor(triggers, path) {
        this.triggers = document.querySelectorAll(triggers);
        this.path = path;
    }

    createDownload(url) {
        const a = document.createElement('a');
        a.setAttribute('href', url);
        a.setAttribute('download', 'picture');
        a.style.display = "none";

        a.click();
        a.remove();
    }

    bindTriggers() {
        this.triggers.forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                this.createDownload(this.path);
            });
        });
    }

    init() {
        this.bindTriggers();
    }
}