let form = document.querySelector("form");
let dothis = document.querySelector("#userInput");
let dothisHere = document.querySelector("#list-goes-here ul");
let bigDelete = document.querySelector("#delete-button");



form.addEventListener("submit", function(event){
    event.preventDefault();
    let dothisnow = dothis.value;
    let listItem = document.createElement("li")
    listItem.innerText = dothisnow;
    dothisHere.appendChild(listItem);
    console.log(listItem)
    dothis.value = "";
    
   
    
})

//function to remove individual items with click
function remover(){
    let deleteMe = document.querySelector("li")
    deleteMe.remove();
}

dothisHere.addEventListener("click", function(event){
    event.preventDefault();
    remover();
})

//function for delete all button
function deleteAll(){
    
    dothisHere.remove();
}

bigDelete.addEventListener("click", function(event){
    event.preventDefault();
    deleteAll();
})


// function newListItems(text){
//     let listItem = document.createElement("li")
//     listItem.innerText = text;
//     return listitem;
//  }
 
