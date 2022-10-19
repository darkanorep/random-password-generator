const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genBtn = document.getElementById("gen-btn")
let output1 = document.getElementById("output-text1")
let output2 = document.getElementById("output-text2")


function startGenerating() {
    
    genPassword()
}

function genPassword() {
    let arroutput1 = []
    let arroutput2 = []
    
    for ( let i = 0; i < characters.length; i++ ) {
        // console.log(characters[Math.floor(Math.random()*characters.length)])
        arroutput1.push(characters[Math.floor(Math.random()*characters.length)])
    }
    // console.log(arroutput1.join("").slice(0,15))
    output1.textContent = arroutput1.join("").slice(0,15)
    
    for ( let i = 0; i < characters.length; i++ ) {
        // console.log(characters[Math.floor(Math.random()*characters.length)])
        arroutput2.push(characters[Math.floor(Math.random()*characters.length)])
    }
    // console.log(arroutput1.join("").slice(0,15))
    output2.textContent = arroutput2.join("").slice(0,15)

}

