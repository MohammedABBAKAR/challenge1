let randomNumber1 = Math.floor(Math.random()*5)+1
// console.log(randomNumber1)

let randomNumber2 = Math.floor(Math.random()*5)+1
let myArray =["/images/dice1.png","/images/dice2.png","/images/dice3.png","/images/dice4.png","/images/dice5.png","/images/dice6.png"]
let chois = myArray[randomNumber1]
// console.log(chois)

let myArray2 =["/images/dice2.png","/images/dice3.png","/images/dice4.png","/images/dice5.png","/images/dice6.png","/images/dice1.png",]
let chois2 =myArray2[randomNumber2]
let Player1 = document.querySelector(".img1").setAttribute("src",chois)

let Player2 = document.querySelector(".img2").setAttribute("src", chois2)
// console.log(Player1)

let Title = document.querySelector("h1")

if(chois > chois2){

    Title.innerHTML="🚩player 1 Wins!"

}
else if(chois2 > chois){
    Title.innerHTML="🚩player 2 Wins!"
}
else{
    Title.innerHTML="Draw!"
}