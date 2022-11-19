function play(num) {
    const target = document.querySelectorAll(".target");
    document.querySelector(".score-display").textContent = `Score: 0`;
    for (let i = 0; i < target.length; i++) {
        document.body.removeChild(target[i]);
}
    for (let i = 1; i <= num; i++) {
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
    random_pos();
    click_evnt();
}
window.onload = play(3);
const target = document.querySelectorAll(".target");
const lowest = document.querySelectorAll(".lowest_score");
const targetchild2 = document.querySelectorAll(".child2");
const targetchild3 = document.querySelectorAll(".child3");
const targetchild4 = document.querySelectorAll(".child4");
const targetchild5 = document.querySelectorAll(".child5");
const highest = document.querySelectorAll(".highest_score");
const score_display = document.querySelector(".score-display");
const modal_score = document.querySelector(".modal-score");
const modal = document.querySelector(".modal");
const play_btn = document.querySelector(".btn");
const level = document.querySelector("#level");
var score = 0;
var run_once = 0;
var score_sound = new Audio("click_sound.mp3");
var out_sound = new Audio("out_sound.mp3");
function random_pos() {
    const target = document.querySelectorAll(".target");
    target.forEach(e=>{
        var limitx = window.screen.width - e.clientWidth;
        var limity = window.screen.height - (e.clientHeight*2);
        var randomx = Math.floor(Math.random() * limitx);
        var randomy = Math.floor(Math.random() * limity);
        e.style.transform = `translate(${randomx}px, ${randomy}px)`;
        e.style.position = "fixed";
    })
}
window.addEventListener("click", e=>{
    target.forEach(ex=>{
        if (run_once==0) {
            if(!ex.contains(e.target) && !modal.contains(e.target)){
                out_sound.play();
                score -= 5;
                score_display.textContent = `Score: ${score}`;
                console.log(score)
            }
            run_once++
        }
    })
    run_once = 0;
})
function click_evnt() {
const target = document.querySelectorAll(".target");
const lowest = document.querySelectorAll(".lowest_score");
const targetchild2 = document.querySelectorAll(".child2");
const targetchild3 = document.querySelectorAll(".child3");
const targetchild4 = document.querySelectorAll(".child4");
const targetchild5 = document.querySelectorAll(".child5");
const highest = document.querySelectorAll(".highest_score");
const score_display = document.querySelector(".score-display");
const modal_score = document.querySelector(".modal-score");
const modal = document.querySelector(".modal");
var targets_clicked = 0;
var score = 0;
    lowest.forEach(e => {
        e.addEventListener("click", ()=>{
            run_once++;
            score_sound.play();
            score++;
            score_display.textContent = `Score: ${score}`;
            modal_score.textContent = score_display.textContent;
            e.parentElement.style.display = "none";
            targets_clicked++;
            if (targets_clicked == target.length) {
                modal.showModal();
            }
        })
    });
    targetchild2.forEach(e => {
        e.addEventListener("click", ()=>{
        run_once++;
        score_sound.play();
        score += 2;
        score_display.textContent = `Score: ${score}`;
        modal_score.textContent = score_display.textContent;
        e.parentElement.style.display = "none";
        targets_clicked++;
        if (targets_clicked == target.length) {
            modal.showModal();
        }
    })
});
targetchild3.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score_sound.play();
        score += 3;
        score_display.textContent = `Score: ${score}`;
        modal_score.textContent = score_display.textContent;
        e.parentElement.style.display = "none";
        targets_clicked++;
        if (targets_clicked == target.length) {
            modal.showModal();
        }
    })
});
targetchild4.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score_sound.play();
        score += 4;
        score_display.textContent = `Score: ${score}`;
        modal_score.textContent = score_display.textContent;
        e.parentElement.style.display = "none";
        targets_clicked++;
        if (targets_clicked == target.length) {
            modal.showModal();
        }
    })
});
targetchild5.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score_sound.play();
        score += 5;
        score_display.textContent = `Score: ${score}`;
        modal_score.textContent = score_display.textContent;
        e.parentElement.style.display = "none";
        targets_clicked++;
        if (targets_clicked == target.length) {
            modal.showModal();
        }
    })
});
highest.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        score_sound.play();
        score += 10;
        score_display.textContent = `Score: ${score}`;
        modal_score.textContent = score_display.textContent;
        e.parentElement.style.display = "none";
        targets_clicked++;
        if (targets_clicked == target.length) {
            modal.showModal();
        }
        console.log(score);
    })
});
}
play_btn.addEventListener("click", () => {
    modal.close();
    play(level.value*3);
})