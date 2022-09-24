//want the form to submit
document.querySelector(".submit").addEventListener("click", addTask);
document.querySelector("ul").addEventListener("click", crossOut);
document.querySelector(".deleteAll").addEventListener("click", deleteAll);
document.querySelector(".completed").addEventListener("click", completed);

//get information from the form
function addTask(e) {
  let task = document.querySelector("input").value; // task contains value of input
  e.preventDefault(); //e.preventDefault is to prevent the click on refreshing the page.
  //console.log(task);
  //want the text to be in the list of items.
  if (task === "") {
    // this stops the function from running cause of the condition thats been added. in others word it stop adding blank li's in the ul.
    return;
  }
  const li = document.createElement("li"); // creating new element to the variable li
  li.innerText = task; // in the li .innerText, it will be a task from the input that you get from the form.
  //console.log(li);
  document.querySelector("ul").appendChild(li); // we're selecting the element ul and giving a new li as a child

  document.querySelector("input").value = ""; // clearing the input value so that you can type a new task
  count()
}
//if item completed, cross it out
//toggle the li when clicked
function crossOut(e) {
  // e.target is targeting the li
  e.target.classList.toggle("crossOut"); //.target is where the person clicks
  //console.log(e.target)
  //console.log(e.target.classList)
  // we created a function crossOut with a 'e' parameter. we are targeting the li and we taking the classes list and adding/removing the crossout like a light switch.
  count()
}

//add buttons
function deleteAll() {
  const lis = document.querySelectorAll("li");
  console.log("before", lis);
  for (let i = 0; i < lis.length; i++) {
    lis[i].remove();
    console.log("after", document.querySelectorAll("li")); //checking how for loop is applied to the function deleteAll
  }
  count()
}

// the completed button will delete the one that are completed
function completed(){ 
  console.log('thisfunction is running')
  const completedLis = document.querySelectorAll('.crossOut')
  console.log(completedLis)
  for( let i = 0 ; i < completedLis.length ; i++){ 
    completedLis[i].remove();
    console.log(document.querySelectorAll('.crossOut'))
  }
}
//span will change once task is completed or deleted
function count(){ 
  let task = document.querySelectorAll("li").length
  let crossOut = document.querySelectorAll('.crossOut').length
  let total = task - crossOut
  document.querySelector('span').innerText = `you have ${total} here`

}
//ask kelly about when using e in buttons
