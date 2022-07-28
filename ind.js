let cardlist= []
let sum = 0
let hasblackjack = false
let isalive = false
let message = " "

// Simulate a mouse click:
//window.location.href = "http://www.w3schools.com";

// Simulate an HTTP redirect:
//window.location.replace("http://www.w3schools.com");




function rendergame(){
    if (sum<=20) {
        message="Do you want to draw a new card?"   
    }

    else if(sum>21){
        message="You are out of game!" 
        isalive = false  
    }

    else{
        message="You've won the game!"  
        hasblackjack= true  
    }

    document.getElementById("message").innerHTML = message
    document.getElementById("cards").innerHTML = "Cards:" 
    document.querySelector("#sum").innerHTML = "Sum: " + sum
    for (i in cardlist){
        document.getElementById("cards").innerHTML += cardlist[i] + " "
    }   
    
}


function startgame(){
    isalive = true
    hasblackjack= false
    let firstcard = randomnumber()
    let secondcard = randomnumber()
    cardlist = [firstcard,secondcard]
    sum = firstcard+secondcard
    rendergame()
}


function newcard(){
  if(isalive == true && hasblackjack== false){
    let card = randomnumber()

    sum += card

    cardlist.push(card)

    rendergame()

  }
    
}

function randomnumber(){
    let random = Math.floor(Math.random() * 13) + 1
    if(random>10){
        return 10
    }

    else if(random == 1){
        return 11
    }

    else{
        return random

    }
    
}
