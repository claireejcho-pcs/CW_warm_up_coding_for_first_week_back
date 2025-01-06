var sandwich = {};

sandwich.noun = document.querySelector("#noun1");
sandwich.adjOne = document.querySelector("#adj1");
sandwich.adjTwo = document.querySelector("#adj2");

let story = document.querySelector("#story");
let launch = document.querySelector("#launch");

launch.addEventListener("click", madlibify, false);

// takes user input and writes it to the page

function madlibify() {
  let launchedStory = ``;
  launchedStory += `<p>Over my winter break I went to ${sandwich.adjOne.value} ${sandwich.adjTwo.value} ${sandwich.noun.value}, and it was so fun.`;
  story.innerHTML = launchedStory;
}
