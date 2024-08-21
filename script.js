"use strict";
/*make array*/

const array = [
  {
    text: "The road to success and the road to failure are almost exactly the same",
    author: "Colin R. Davis",
  },
  {
    text: "Learn as if you will live forever, live like you will die tomorrow",
    author: "Mahatma Gandhi",
  },
  {
    text: "When you change your thoughts, remember to also change your world.",
    author: "Norman Vincent Peale",
  },
  {
    text: "It is better to fail in originality than to succeed in imitation.",
    author: "Herman Melville",
  },
  {
    text: "Success usually comes to those who are too busy to be looking for it.",
    author: "David Thoreau",
  },
  {
    text: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers",
  },
  {
    text: "Experience is a hard teacher because she gives the test first, the lesson afterward.",
    author: "Vernon Sanders Law",
  },
  {
    text: "Setting goals is the first step in turning the invisible into the visible.",
    author: "Tony Robbins",
  },
  {
    text: "Just one small positive thought in the morning can change your whole day.",
    author: "Dalai Lama",
  },
  {
    text: "Don’t let someone else’s opinion of you become your reality.",
    author: "Les Brown",
  },
  {
    text: "I am not a product of my circumstances. I am a product of my decisions.",
    author: "Stephen R. Covey",
  },
  {
    text: "Someone’s sitting in the shade today because someone planted a tree a long time ago.",
    author: "Warren Buffet",
  },
  {
    text: "Live out of your imagination, not your history.",
    author: "Stephen Covey",
  },
];

//create const

// Get Quotes From array
function showQuote() {
  let index = Math.floor(Math.random() * array.length);
  document.querySelector(".text").innerHTML = array[index].text;
  document.querySelector(".author").innerHTML = array[index].author;
}

showQuote();


// Event Listeners
document.querySelector(".button").addEventListener("click", showQuote);



// document.getElementsByClassName("button").addEventListener("click");

// document.getElementsByClassName(".button").addEventListener("click");

// On Load (return)
