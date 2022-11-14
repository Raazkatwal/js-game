const player = document.querySelector(".player_car");
var x=0,y=0;
const playable_width = window.screen.width - player.clientWidth; 
const playable_height = window.screen.height - 170;
document.addEventListener("keydown", e => {
    //if up or W btn
    if (e.keyCode==38 || e.keyCode==87) {
        if (y!=0) {
            y-=10;
        }
        player.style.transform = `translate(${x}px, ${y}px)`;
    }
    //if down or S btn
    if (e.keyCode==40 || e.keyCode==83) {
        if (y<playable_height) {
            y+=10;
        }
        player.style.transform = `translate(${x}px, ${y}px)`;
    }
    //if right or D btn
    if (e.keyCode==39 || e.keyCode==68) {
        if (x<playable_width) {
            x+=10;
        }
        player.style.transform = `translate(${x}px, ${y}px)`;
    }
    //if left or A btn
    if (e.keyCode==37 || e.keyCode==65) {
        if (x!=0) {
            x-=10;
        }
        player.style.transform = `translate(${x}px, ${y}px)`;
    }
})
setInterval("bot_load()", 100);
const new_bot = document.createElement("img");
new_bot.src = "img/bot1.png";
new_bot.classList.add("cars", "bot-car");
async function bot_load(){
    document.body.appendChild(new_bot);
    const bot_car = document.querySelectorAll(".bot-car");
    var random = Math.floor(Math.random() * 601);
    bot_car.forEach(async element => {
        for (let i = playable_width; i > -500; i--) {
            await wait(1);
            element.style.transform = `translate(${i}px, ${random}px)`;
        }
        document.body.removeChild(element);
    });
}
    function wait(ms) {
        return new Promise(resolve => {
            setTimeout(()=>{resolve('')},ms);
        })
    }