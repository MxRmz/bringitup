export default class ShowInfo {
    
    constructor(btns, textBlock) {
        this.btns = document.querySelectorAll(btns);
        this.textBlock = document.querySelectorAll(textBlock);
        console.log(2);
    }

    showContent () {
        this.text = 

        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                //console.log(this.textBlock);
                const text = btn.closest('.module__info-show').nextElementSibling;
                //btn.closest('.module__info-show').nextElementSibling.addClass = 'animate__fadeInDown';
                //this.textBlock.style.display = 'block';
                text.classList.toggle('msg');
                text.style.marginTop = '20px';
            });

        });
    }

    init() {
        this.showContent();
    }
}