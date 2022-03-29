let form = document.querySelector("form");
let dothis = document.querySelector("#userInput");
let dothisHere = document.querySelector("#list-goes-here ul");




form.addEventListener("submit", function(event){
    event.preventDefault();
    let dothisnow = dothis.value;
    let listItem = document.createElement("li")
    listItem.innerText = dothisnow;
    dothisHere.appendChild(listItem);
    console.log(listItem)
    dothis.value = "";
    
   
    
})





// function newListItems(text){
//     let listItem = document.createElement("li")
//     listItem.innerText = text;
//     return listitem;
//  }
 
