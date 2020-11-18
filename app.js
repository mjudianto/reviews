const review = [
    {
        id: 1,
        name: "Mathew Judianto",
        job: "Programmer",
        img: "images.png",
        text: 
            "Hi, I'm Mathew Judianto 18 years old and I am currently studying web development from youtube tutorial videos",
    },
    {
        id: 2,
        name: "Bob Marley",
        job: "Singer",
        img: "images.jfif",
        text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        name: "Wonder Woman",
        job: "Super Hero",
        img: "images 1.png",
        text: "I used to want to save the world. To end war and bring peace to mankind; but then I glimpsed the darkness that lives within their light. I learnt that inside every one of them there will always be both. The choice each must make for themselves—something no hero will ever defeat.",
    },
];

//select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevbtn = document.querySelector(".prev-btn");
const nextbtn = document.querySelector(".next-btn");
const randombtn = document.querySelector(".random-btn");

//set starting item
let currentItem = 0;

//load intial item
window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

function showPerson (person) {
    const item = review[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show the next person
nextbtn.addEventListener("click", function() {
    currentItem++;
    if (currentItem > review.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevbtn.addEventListener("click", function() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = review.length - 1;
    }
    showPerson(currentItem);
});

//random
randombtn.addEventListener("click", function() {
    currentItem = Math.floor(Math.random() * review.length);
    showPerson(currentItem);
});