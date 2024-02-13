const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const body = document.body;
const jestka = document.getElementById("jestkaya_pulya");
const secondPulya = document.getElementById("second_pulya");
const win = document.querySelector('.win');
const hpIcon = document.getElementById('hpIcon');
var d = document.querySelector('.counter');
var hp = 3;


document.addEventListener("keydown", function(event) {
    jump();
})

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump")
    }
    setTimeout( function() {
        dino.classList.remove("jump")
    }, 300)
}

let godSytem = setInterval( function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let jestkaLEFT = parseInt(window.getComputedStyle(jestka).getPropertyValue("left"));
    let jestkaSec = parseInt(window.getComputedStyle(secondPulya).getPropertyValue("left"));
    hp-1;

    
    if (jestkaLEFT < 50 && jestkaLEFT > 0 && dinoTop >= 110) {
      hp -= 0.38;

      hpIcon.remove();
      
      dino.classList.add("poluchilVelikoyPezdi")
      setTimeout(function() {
        dino.classList.remove("poluchilVelikoyPezdi")
      }, 100) 

      if(hp <= 0) {
        alert("this monkey has died");
        location.reload();
      }
    }
}, 10)

function c(time, startN) {
   startN = 0;
   time = 0;
  d.textContent = startN;
  const timer = setInterval(() => {
    startN += 1 ;
    Math.floor(startN);
    d.textContent = startN;
    time += 1;
    if(time > 50000) {
      clearInterval(timer);
    }
  }, 10);
}
c(d);



