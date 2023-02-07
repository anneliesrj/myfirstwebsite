//comment section
let form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    //get name and comment
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    //create div to show comment on page  
    const commentContainer = document.createElement('div');
    commentContainer.innerHTML = `<h3>${name}</h3><p>${comment}</p>`;
    commentContainer.classList.add('comment');
    
    const commentsContainer = document.querySelector('#comments-container');
    commentsContainer.appendChild(commentContainer);
    //emtpy form
    document.querySelector('#name').value = '';
    document.querySelector('#comment').value = '';
  });



//heart button
const buttons = document.querySelectorAll('.heart-button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('liked');
  });
});

//storage save for later
const heartButtons = document.querySelectorAll(".heart-button");
heartButtons.forEach(function(heartButton) {
  heartButton.addEventListener("click", function() {
    let parent = this.parentElement;
    let image = parent.querySelector("img").src;

    let item = {
      image: image
    };

    let savedItems = JSON.parse(localStorage.getItem("savedItems")) || [];
    savedItems.push(item);
    localStorage.setItem("savedItems", JSON.stringify(savedItems));
//alert the saved items
    alert(`${savedItems.length} items in your "Save for later" folder`);
  });
});
