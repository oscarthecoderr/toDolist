//want the form to submit
document.querySelector(".submit").addEventListener("click", addTask);

//get information from the form
function addTask(e) {
  let task = document.querySelector("input").value; // task contains value of input
  e.preventDefault(); //e.preventDefault is to prevent the click on refreshing the page.
  console.log(task);

  //want the text to be in the list of items.
  if( task === ''){ // this stops the function from running cause of the condition thats been added. in others word it stop adding blank li's in the ul. 
    return 
  }
  const li = document.createElement("li"); // creating new element to the variable li
  li.innerText = task; // in the li .innerText, it will be a task from the input that you get from the form.
  console.log(li);
  document.querySelector("ul").appendChild(li); // we're selecting the element ul and giving a new li as a child

  document.querySelector("input").value ='' // clearing the input value so that you can type a new task
 
}
  //if item completed, cross it out
  // if not, leave it as is
  //add buttons
  // the delete button will delete all task
  // the completed button will delete the one that are completed
  //span will change once task is completed or deleted

