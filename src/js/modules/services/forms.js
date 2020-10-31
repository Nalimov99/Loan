import postData from './request';


export default class Forms {
    constructor(form, messageColor) {
        this.form = document.querySelector(form);
        this.message = {
            loading: 'Загрузка...',
            done: 'Спасибо, скоро с вами свяжемся!',
            failure: 'Произошла ошибка'
        };
        this.inputs = this.form.querySelectorAll('input');
        this.path = 'assets/question.php';
        this.messageColor = messageColor;
    }

    clearInputs() {
        this.inputs.forEach(currentItem => {
            currentItem.value = "";
        });
    }

    checkMailInputs(){
        const mailInputs = document.querySelectorAll('[type="email"]');
    
        mailInputs.forEach(input => {
            input.addEventListener('keypress', function(e) {
                if (e.key.match(/[^a-z 0-9 @ \.]/ig)) {
                    e.preventDefault();
                }
            });
        });
    }

    phoneMask() {

        let setCursorPosition = (pos, elem) => {
            elem.focus();
            
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                let range = elem.createTextRange();
    
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        };
    
        function createMask(event) {
            let matrix = '+7 (___) ___ __ __',
                i = 0,
                def = matrix.replace(/\D/g, ''),
                val = this.value.replace(/\D/g, '');
    
            if (def.length >= val.length) {
                val = def;
            }
    
            this.value = matrix.replace(/./g, function(a) {
                return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
            });

    
            if (event.type === 'blur') {
                if (this.value.length == 2) {
                    this.value = '';
                }
            } else {
                setCursorPosition(this.value.length, this);
            }
        }
    
        let inputs = document.querySelectorAll('[name=phone]');
    
    
        inputs.forEach(input => {
            input.addEventListener('input', createMask);
            input.addEventListener('focus', createMask);
            input.addEventListener('blur', createMask);
        });
    }

    createMessage(textContent) {
        const div = document.createElement('div');
        div.style.cssText = `
        font-family: Mark;
        color: ${this.messageColor};
        font-weight: 800;
        line-height: 64px;
        font-size: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 80%;
        `;
        div.classList.add('animated', 'fadeIn');
        div.textContent = textContent;
        div.classList.add('fetch---Notification');
        this.form.style.display = "none";
        this.form.parentNode.appendChild(div);
    }



    init() {
        this.checkMailInputs();
        this.phoneMask();
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(this.form);
            this.createMessage(this.message.loading);
            postData(this.path, formData)
            
            .then(() => {
                document.querySelector('.fetch---Notification').remove();
                this.createMessage(this.message.done);
            })
            .catch(() => {
                document.querySelector('.fetch---Notification').remove();
                this.createMessage(this.message.failure);

            })
            .finally(() => {
                this.clearInputs();
                setTimeout(() => {
                    document.querySelector('.fetch---Notification').remove();
                    this.form.style.display = "block";
                }, 6000);
            });
        
        });
    }
}