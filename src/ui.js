import getWeather from "./logic";

function init() {
    const button = document.querySelector("#search");
    button.addEventListener("click", (e) => search(e));
}

function search(e) {
    e.preventDefault();
    console.log("clicked");
    let city = document.getElementById("city").value;
    if (city) {
        getWeather(city);
    };
}

export default init;