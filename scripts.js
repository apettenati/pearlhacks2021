//Selectors
const completeButtons = document.querySelectorAll('.complete');
const skipButtons = document.querySelectorAll('.skip');

//Event Listeners
completeButtons.forEach(button => {
    button.addEventListener('click', completeTask);
})
skipButtons.forEach(button => {
    button.addEventListener('click', skipTask);
})

//Functions
function completeTask(event) {
    const button = event.target;
    const card = button.parentElement;
    const cardChildren = button.parentElement.children;
    console.log(card);
    card.classList.toggle("completed");
    cardChildren[0].classList.toggle("completed-strikethrough");
    cardChildren[1].classList.toggle("completed-strikethrough");
} 

function skipTask(event) {
    const button = event.target;
    const card = button.parentElement.parentElement;
    card.classList.toggle("skipped");
} 