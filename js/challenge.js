let counter = document.querySelector("#counter")
let plusButton = document.querySelector("#plus")
let minusButton = document.querySelector("#minus")
let pauseButton = document.querySelector("#pause")
let commentForm = document.querySelector("#comment-form")
let commentList = document.querySelector("#list")

let constantCounter = setInterval(counterClock, 1000)

function counterClock() {
    counter.innerText++;
}

plusButton.addEventListener("click", function(){
    counter.innerText++;
})

minusButton.addEventListener("click", function(){
    counter.innerText--;
})

commentForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    let blankLi = document.createElement("li")
    blankLi.innerText = evt.target.comment.value
    commentList.append(blankLi)
})

