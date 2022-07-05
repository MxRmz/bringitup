import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        try {
            if (n > this.slides.length) {
                this.slideIndex = 1;
            }
    
            if (n < 1) {
                this.slideIndex = this.slides.length;
            }
            
            
            
            for (let i = 0; i < this.slides.length; i++) {
                this.slides[i].style.display = 'none';
    
              
            }
            
    
            this.slides[this.slideIndex - 1].style.display = 'block';
            this.hanson.style.display = 'none';
            
            if (this.slides[this.slideIndex - 1].contains(this.hanson)) {
                setTimeout(() => {
                    
                    this.hanson.style.display = 'block';
                }, 2000); 
            }
        } catch(e) {}


    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        this.btns.forEach(item => {
            item.addEventListener('click', () => {
                
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex);

        document.querySelectorAll('.prevmodule').forEach(item => {
            item.addEventListener('click', () => {
                this.plusSlides(-1);
            });
        });

        document.querySelectorAll('.nextmodule').forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.plusSlides(1);
            });
        });

        
    }
    

}