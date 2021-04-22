const listItems = document.querySelectorAll("li");
console.log(`We have ${listItems.length} list items on this page`);
const btns = document.querySelectorAll('button');

// Convert buttons NodeList to an array
const btnsArr = Array.from(btns);
console.log(btnsArr)


const aButton = document.querySelector('button');
const planet = document.getElementById('planetoid')
console.log(Array.from(aButton))
let toggle= false;


function dosomething(){
    if (toggle){

        console.log("this should do something")
        aButton.style.backgroundColor="red"
        planet.fill="rgb(255  ,255,64)"
        
        
    }
    else {aButton.style.backgroundColor="blue"}

    toggle=!toggle

}