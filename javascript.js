const form = document.querySelector(".container");

form.addEventListener("search", e => {
    e.preventDefault();
    const inputVal = input.value;
});




const apiKey = "fe04c9ca681cb4380de909d2c6827a35";
const inputVal = input.value;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=$fe04c9ca681cb4380de909d2c6827a35&units=metric`;
