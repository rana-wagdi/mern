let basket = document.querySelector("#basket");
let body = document.querySelector('body');
let move = 0;

body.addEventListener('keydown', function (e) {
    if (e.key == "ArrowRight") {
        handleMove(1);

    } else if (e.key == "ArrowLeft") {

        handleMove(-1);

    }
})

function handleMove(moveHandling) {
    // console.log(move);
    if (move < (window.innerWidth - basket.width) && moveHandling == 1) {
        move += 30 * moveHandling;
        if (move > (window.innerWidth - basket.width)) move = window.innerWidth - basket.width;
        basket.style.left = move + "px";
      

    } else if (move > 0 &&moveHandling == -1) {
        
        move += 40 * moveHandling;
        if (move < 0) move = 0;
        basket.style.left = move + "px";
        // basket.classList.add("flip");

    }
}
const eggImg = document.querySelector('#egg');


function moveDown() {
    var audio = new Audio('1.wav');

    let down = 0;
    eggImg.src = "images/1182.png";

    eggImg.style.top = "0";
    eggImg.style.left = Math.random() * (window.innerWidth - eggImg.width);
    let timerId = setInterval(() => {
        down += 1;
        
///move height
        if (down < window.innerHeight - eggImg.width -200) {
            eggImg.style.top = down + 90 + "px";
        } else {
            if (eggImg.offsetLeft + eggImg.width < basket.offsetLeft + basket.width && eggImg.offsetLeft > basket.offsetLeft) {
                audio.play();
            }
            else {
                eggImg.style.top = down + 90 + eggImg.offsetHeight + "px"
                eggImg.src = "images/Uovo_sorridente.png";
            }

            clearInterval(timerId);
            

          
                setTimeout(() => {
                    moveDown()
                }, 200);
            
        }
    }, 1);
}

moveDown()
