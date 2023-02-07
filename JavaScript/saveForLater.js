const savedItemsList = document.getElementById("saved-items-list");
const clearAllButton = document.getElementById("clear-all-button");

//get saved items from local storage
let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];

// Loop through the saved items and display them in a list
for (const item of savedItems) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<img src="${item.image}"><button class="delete-button">Delete</button>`;
  savedItemsList.appendChild(listItem);
}

// add event listeners to the delete buttons
const deleteButtons = document.querySelectorAll(".delete-button");
deleteButtons.forEach(function(deleteButton) {
  deleteButton.addEventListener("click", function() {
    let parent = this.parentElement;
    let image = parent.querySelector("img").src;


    let savedItems = JSON.parse(localStorage.getItem("savedItems"));
    savedItems = savedItems.filter(function(item) {
      return item.image !== image
    });
    localStorage.setItem("savedItems", JSON.stringify(savedItems));

    parent.remove();
  });
});

// add event listener to the clear all button
clearAllButton.addEventListener("click", function() {
  localStorage.removeItem("savedItems");
  while (savedItemsList.firstChild) {
    savedItemsList.removeChild(savedItemsList.firstChild);
  }
});
