// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {
  const like = document.querySelectorAll(".like-glyph")
 // console.log(like)
 document.querySelector('#modal').className = "hidden"


like.forEach(like => like.addEventListener("click", heartButton))

function heartButton(like){
 // console.log(like.target)
 mimicServerCall()
  .then(() => {
    if (like.target.innerText === EMPTY_HEART) {
      like.target.innerText === FULL_HEART
      like.target.classList.add("activated-heart")
    }
    else (
      like.target.classList.remove("activated-heart"),
      like.target.innerText = EMPTY_HEART
      )})
  .catch(() => {
    const erMsg = document.getElementById("modal")
    erMsg.className = "show"
    setTimeout(() => {
      const erMsg = document.getElementById("modal")
    erMsg.className = "hidden"}, 3000);
    
    })
  }
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
