const lowest = document.querySelectorAll(".lowest_score");
const highest = document.querySelectorAll(".highest_score");
var score = 0
var run_once = 0;
window.addEventListener("click", e=>{
    document.querySelectorAll(".target").forEach(ex=>{
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
        // if (run_once==0) {
            run_once++;
            score++;
            console.log(score);
        // }
    })
});
highest.forEach(e => {
    e.addEventListener("click", ()=>{
        run_once++;
        // if (run_once==0) {
            score += 10;
            console.log(score);
        // }
    })
});