

let First = document.querySelector('.first');
let Second = document.querySelector('.second');
let Third = document.querySelector('.third');
let Four = document.querySelector('.four');
let Five = document.querySelector('.five');
let Six = document.querySelector('.six');

function makeSound(key) {

    switch (key) {
      case "4":
        var tom1 = new Audio("tom-1.mp3");
        tom1.play();
        break;
  
      case "5":
        var tom2 = new Audio("tom-2.mp3");
        tom2.play();
        break;
  
      case "6":
        var tom3 = new Audio('tom-3.mp3');
        tom3.play();
        break;
  
      case "3":
        var snare = new Audio('snare.mp3');
        snare.play();
        break;
  
      case "1":
        var crash = new Audio('crash.mp3');
        crash.play();
        break;
  
      case "2":
        var kick = new Audio('kick-bass.mp3');
        kick.play();
        break;
  
  
      default: console.log(key);
  
    }
  }
  

First.addEventListener('click',function(){
    makeSound('1');
})
Second.addEventListener('click',function(){
    makeSound('2');
})
Third.addEventListener('click',function(){
    makeSound('3');
})
Four.addEventListener('click',function(){
    makeSound('4');
})
Five.addEventListener('click',function(){
    makeSound('5');
})
Six.addEventListener('click',function(){
    makeSound('6');
})

document.addEventListener('keypress',function(e){
    makeSound(e.key);
})

