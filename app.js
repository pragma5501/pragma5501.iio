
class App {
    constructor() {
        this.mouse = {
            x: 0,
            y: 0,
        };

        this.click_flag = false;

        document.addEventListener('pointermove', this.onMove.bind(this), false);
        document.addEventListener('click', this.onClick.bind(this), false);
    }
    
    onMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
        if( this.click_flag == false) return;

        const left_screen = document.getElementById('left_screen');
        const right_screen= document.getElementById('right_screen');

        left_screen.style.width = `${(this.mouse.x)/document.body.clientWidth * 100}%`;
        right_screen.style.width= `${100-(this.mouse.x)/document.body.clientWidth * 100}%`
        console.log(left_screen.style.width);
    }
    onClick(e) {
        if( this.click_flag == false) {
            this.click_flag = true;
        } else {
            this.click_flag = false;
        }
    }
}

window.onload = () => {
    const app = new App();

    const left_screen = document.getElementById('left_screen');
    const right_screen= document.getElementById('right_screen');

    console.log(left_screen.style.width);

}