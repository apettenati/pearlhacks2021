//Selectors
const completeButtons = document.querySelectorAll('.complete');
const skipButtons = document.querySelectorAll('.skip');
const commentButtons = document.querySelectorAll('.comment');

//Event Listeners
// document.addEventListener('DOMContentLoaded', getData);
completeButtons.forEach(button => {
    button.addEventListener('click', completeTask);
})
skipButtons.forEach(button => {
    button.addEventListener('click', skipTask);
})
commentButtons.forEach(button => {
    button.addEventListener('click', saveText)
})


//Functions
function completeTask(event) {
    const button = event.target;
    const card = button.parentElement;
    const cardChildren = button.parentElement.children;
    card.classList.toggle("completed");
    console.log(cardChildren);
    cardChildren[0].classList.toggle("completed-strikethrough");
    cardChildren[1].classList.toggle("completed-strikethrough");
    console.log(cardChildren[0].innerHTML);
    setData(cardChildren[0].innerHTML);
} 

function skipTask(event) {
    const button = event.target;
    const card = button.parentElement.parentElement;
    card.classList.toggle("skipped");
} 

function saveText(event) {
    // const button = event.target;
    // const card = button.parentElement;
    // listHeader = card.getElementById("list-header");
    // listHeader.style.display = "block";
    // const cardChildren = button.parentElement.children;

    // var list = card.getElementById("commlist");
    // // var textVal = document.getElementById("text").value;
    // var text = card.createElement('li');
    // text.appendChild(card.createTextNode(textVal));
    // list.appendChild(text);
    // // card.appendChild(text);
    // // card.appendChild(blank);

    const button = event.target;
    const card = button.parentElement;
    const cardChildren = button.parentElement.children;

    cardChildren[9].style.display = "block"; //revealing header "Comments:"
    var list = cardChildren[10];
    var text = document.createElement('li');
    var textVal = cardChildren[4].value;
    text.appendChild(document.createTextNode(textVal));
    list.appendChild(text);
}

function setData(data) {
    let completed;
    if(localStorage.getItem('completed') === null) {
        completed = [];
    }
    else {
        completed = JSON.parse(localStorage.getItem('completed'));
    }
    console.log(completed);
    completed.push(data);
    localStorage.setItem('completed', JSON.stringify(completed));

}

function getData() {
    // Check if there's data saved
    let completed;
    if(localStorage.getItem('completed') === null) {
        completed = [];
    }
    else {
        completed = JSON.parse(localStorage.getItem('completed'));
    }
}