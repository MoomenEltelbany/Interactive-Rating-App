// Capturing the list elements
let links = document.querySelectorAll(".list li");
const linksArray = Array.from(links);
let chosenRating;

links.forEach((ele) => {
    ele.onclick = () => {
        links.forEach((ele) => {
            ele.classList.remove("done");
        });
        ele.classList.add("done");
    };
});

// Getting the span where it catches the rating number
let ratingSpan = document.querySelector(".rating-num");

// Getting the submit button
let submitBtn = document.querySelector("button");

submitBtn.onclick = () => {
    linksArray.forEach((ele) => {
        if (ele.classList.contains("done")) {
            chosenRating = ele.dataset.num;
        }
    });
    console.log(chosenRating);
};

export default chosenRating;
