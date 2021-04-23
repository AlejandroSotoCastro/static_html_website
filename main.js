const listItems = document.querySelectorAll("li");
console.log(`We have ${listItems.length} list items on this page`);
const btns = document.querySelectorAll('button');

// Convert buttons NodeList to an array
const btnsArr = Array.from(btns);
console.log(btnsArr)


const aButton = document.querySelector('button');
const planet = document.getElementById('planetoid')
const secretButton = document.getElementById('buttonId')
console.log(Array.from(aButton))
let toggle= false;


/*funct to make the button apear*/ 
function secretfunction(){
    secretButton.classList.toggle('visible')


}

function dosomething(){
    if (toggle){

        aButton.style.backgroundColor="red"
        planet.fill="rgb(255  ,255,64)"
        
        
    }
    else {aButton.style.backgroundColor="blue"}

    toggle=!toggle

}