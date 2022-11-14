const player = document.querySelector(".player_car");
var x=0,y=0;
const playable_width = window.screen.width - player.clientWidth; 
const playable_height = window.screen.height - 170;
document.addEventListener("keydown", e => {
    //if up btn
    if (e.keyCode==38) {
        if (y!=0) {
            y-=10;
        }
        player.style.transform = `translate(${x}px, ${y}px)`;
    }
    //if down btn
    if (e.keyCode==40) {
        if (y<playable_height) {
            y+=10;
        }
        player.style.transform = `translate(${x}px, ${y}px)`;
    }
    //if right btn
    if (e.keyCode==39) {
        if (x<playable_width) {
            x+=10;
        }
        player.style.transform = `translate(${x}px, ${y}px)`;
    }
    //if left btn
    if (e.keyCode==37) {
        if (x!=0) {
            x-=10;
        }
        player.style.transform = `translate(${x}px, ${y}px)`;
    }
})