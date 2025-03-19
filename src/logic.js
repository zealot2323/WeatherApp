/*
Need to export the function and import to index

Need a search box, button, and need listeners and clearers

Search takes value, clears it, then:
    searches api with value and returns value
    if success load weather info
    if failure load error

    error handling when form is not submitted correctly
*/
const apiKey = "GJTYW2ZM4WRCWAHGFLSBEA6DR";

async function loadImage(name) {
    const image = await import(`./icons/${name}.png`);
    return image.default;
}

async function getWeather(city) {
    const unit = "us";
    console.log("searching...");
    console.log(city);
    console.log(unit);
    console.log(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&include=current&key=${apiKey}&contentType=json`)
    try {
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=${unit}&include=current&key=${apiKey}&contentType=json`, {
            mode: "cors"
            })
        let data = await response.json();
        console.log(data);
        renderWeatherData(data);

      } catch(err) {
        console.error(err);
      }
}

function renderWeatherData(data) {
    console.log("received");
    console.log(data);
    let temp = data.currentConditions.temp;
    let conditions = data.currentConditions.conditions;

    document.querySelector("#temp").textContent = temp;
    document.querySelector("#cond").textContent = conditions;

    let icon = data.currentConditions.icon;
    loadImage(icon).then((img) => {
        let iconDiv = document.querySelector("#icon");
        iconDiv.innerHTML = "";
        let newIcon = document.createElement("img");
        newIcon.setAttribute("src", img);
        iconDiv.appendChild(newIcon);
      });

}

export default getWeather;