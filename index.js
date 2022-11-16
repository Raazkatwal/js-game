for (let i = 1; i <= 3; i++) {
    var create_target = document.createElement("div");
    create_target.className = "target";
    for (let j = 1; j <= 6; j++) {
        var targetchild = document.createElement("div");
        targetchild.className = `child${j}`;
        if (j==1) {
            targetchild.classList.add("lowest_score");
        }
        if (j==6) {
            targetchild.classList.add("highest_score");
        }

        create_target.appendChild(targetchild);
    }
    document.body.appendChild(create_target);
}
const target = document.querySelectorAll(".target");
const lowest = document.querySelectorAll(".lowest_score");
const targetchild2 = document.querySelectorAll(".child2");
const targetchild3 = document.querySelectorAll(".child3");
const targetchild4 = document.querySelectorAll(".child4");
const targetchild5 = document.querySelectorAll(".child5");
const highest = document.querySelectorAll(".highest_score");
const score_display = document.querySelector(".score-display");
var score = 0
var run_once = 0;
target.forEach(e=>{
    var limitx = window.screen.width - e.clientWidth;
    var limity = window.screen.height - (e.clientHeight*4);
    var randomx = Math.floor(Math.random() * limitx);
    var randomy = Math.floor(Math.random() * limity);
    e.style.transform = `translate(${randomx}px, ${randomy}px)`;
})
window.addEventListener("click", e=>{
    target.forEach(ex=>{
        if (run_once==0) {
        if(!ex.contains(e.target)){
                score -= 5;
                console.log(score);
            }
            run_once++
        }
    })
    run_once = 0;
})
lowest.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score++;
        score_display.textContent = `Score: ${score}`;
        e.parentElement.style.display = "none";
    })
});
targetchild2.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score += 2;
        score_display.textContent = `Score: ${score}`;
        e.parentElement.style.display = "none";
    })
});
targetchild3.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score += 3;
        score_display.textContent = `Score: ${score}`;
        e.parentElement.style.display = "none";
    })
});
targetchild4.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score += 4;
        score_display.textContent = `Score: ${score}`;
        e.parentElement.style.display = "none";
    })
});
targetchild5.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score += 5;
        score_display.textContent = `Score: ${score}`;
        e.parentElement.style.display = "none";
    })
});
highest.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score += 10;
        score_display.textContent = `Score: ${score}`;
        e.parentElement.style.display = "none";
    })
});