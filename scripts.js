//Selectors
const completeButtons = document.querySelectorAll('.complete');
const skipButtons = document.querySelectorAll('.skip');
const commentButtons = document.querySelectorAll('.comment');

//Event Listeners
document.addEventListener('DOMContentLoaded', getCompleteData);
document.addEventListener('DOMContentLoaded', getSkipData);
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
    setCompleteData(cardChildren[0].innerHTML, "completed");
} 

function skipTask(event) {
    const button = event.target;
    const card = button.parentElement.parentElement;
    card.classList.toggle("skipped");
    console.log(`card: ${card.children[1].children[0].innerHTML}`);
    console.log(`card: ${card.children[1].children[0].innerHTML}`);
    setSkipData(card.children[1].children[0].innerHTML)
} 

function saveText(event) {
    const button = event.target;
    const card = button.parentElement;
    const cardChildren = button.parentElement.children;
    var textVal = cardChildren[7].value;
    console.log("card children", cardChildren[7].value);
    if (textVal == "") {
        alert("Please enter a comment")
        return
    } else {
        cardChildren[9].style.display = "block"; //revealing header "Comments:"
        var list = cardChildren[10];
        var text = document.createElement('li');
        var textVal = cardChildren[7].value;
        text.appendChild(document.createTextNode(textVal));
        list.appendChild(text);
        cardChildren[7].value = ""
    }
}

function setCompleteData(data) {
    let completed;
    console.log("local storage: ", localStorage.getItem('completed'))
    if (localStorage.getItem('completed') === null) {
        completed = [];
    }
    else {
        completed = JSON.parse(localStorage.getItem('completed'));
    }
    if (completed.includes(data)) {
        completed.splice(data);
    }
    else {
        completed.push(data);
    }
    localStorage.setItem('completed', JSON.stringify(completed));
    console.log("completed end of setdata: ", completed)
}

function getCompleteData() {
    // Check if there's data saved
    // get array of titles of the cards (20)
    // iterate thru array find the ones that are in completed (indexOf)
    // cardChildren[1].classList.toggle("completed-strikethrough");
    let completed;
    var titles = document.getElementsByClassName("card-title")
    // console.log("title: ", titles)
    // console.log("local storage: ", typeof(localStorage.getItem('completed')))
    var arr = JSON.parse(localStorage.getItem('completed'))
    // console.log("arr: ", arr)
    var i
    var j
    if (arr !== null) {
        for (i = 0; i < titles.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (titles[i].innerHTML == arr[j]) {
                    // console.log("title: ", titles[i].innerHTML)
                    var parent = titles[i].parentElement.parentElement
                    parent.children[1].classList.value = ("completed")
                    // console.log("completed: ", document.getElementsByClassName("completed"))
                    // console.log("parent: ", parent)
                    var child = parent.children
                    // console.log("child: ", child)
                    child[1].children[0].classList.value = "completed-strikethrough"
                    child[1].children[1].classList.value = "completed-strikethrough"
                    // console.log("strikethrough: ", document.getElementsByClassName("completed-strikethrough"))
                }
            }
        }
    }
    console.log("getdata: ", localStorage.getItem('completed'))
    if(localStorage.getItem('completed') === null) {
        completed = [];
    }
    else {

        completed = JSON.parse(localStorage.getItem('completed'));
    }
}

function setSkipData(data) {
    let skip;
    // console.log("local storage: ", localStorage.getItem('skip'))
    if (localStorage.getItem('skip') === null) {
        skip = [];
    }
    else {
        skip = JSON.parse(localStorage.getItem('skip'));
    }
    if (skip.includes(data)) {
        skip.splice(data);
    }
    else {
        skip.push(data);
    }
    localStorage.setItem('skip', JSON.stringify(skip));
    // console.log("skip end of setdata: ", skip)
}
function getSkipData() {
    // Check if there's data saved
    // get array of titles of the cards (20)
    // iterate thru array find the ones that are in skip (indexOf)
    // cardChildren[1].classList.toggle("skip-strikethrough");
    let skip;
    var titles = document.getElementsByClassName("card-title")
    // console.log("local storage: ", typeof(localStorage.getItem('skip')))
    var arr = JSON.parse(localStorage.getItem('skip'))
    // console.log("arr: ", arr)
    var i
    var j
    if (arr !== null) {
        for (i = 0; i < titles.length; i++) {
            for (j = 0; j < arr.length; j++) {
                if (titles[i].innerHTML == arr[j]) {
                    // console.log("title: ", titles[i].innerHTML)
                    var parent = titles[i].parentElement.parentElement
                    // console.log("parent", parent.classList)
                    parent.classList.value = "skipped";
                    // console.log("class list:", parent.classList.value)
                }
            }
        }
    }
    console.log("getdata: ", localStorage.getItem('skip'))
    if(localStorage.getItem('skip') === null) {
        skip = [];
    }
    else {

        skip = JSON.parse(localStorage.getItem('skip'));
    }
}

// event listener for when page reloads
// store data thats currently changed
// send data w event listener 

window.addEventListener('load', event => {
    getCompleteData();
    getSkipData();
});