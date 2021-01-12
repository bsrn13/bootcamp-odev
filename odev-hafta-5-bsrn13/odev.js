import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

document.querySelector("#populationBigger").addEventListener("click", () => {
  const filterData = data.filter(cities => cities.population > 500000);
  createTableElements(filterData, "allcities");
})

document.querySelector("#landAreaLess").addEventListener("click", () => {
  const filterArea = data.filter(cities => cities.landArea < 1000 );
  createTableElements(filterArea, "allcities");
})

document.querySelector("#isPopulationLess").addEventListener("click", () => {
  const populationLEss = data.some(cities => cities.population < 100000);
  if (populationLEss) {
    alert ("YES");
  }
  else {
    alert ("NO");
  }
})

document.querySelector("#isLandBigger").addEventListener("click", () => {
  const landBigger = data.every(cities => cities.landArea > 100);
  if (landBigger) {
    alert ("YES");
  }
  else {
    alert("NO");
  }
})

document.querySelector("#cityselect").innerHTML = "<option selected>Select City</option>";

const cityName = data.map(cityName => cityName.name);
const selectCity = document.querySelector("#cityselect");
cityName.forEach((element) => {

  const newCity = document.createElement("option");
  newCity.setAttribute("value", element);
  newCity.innerHTML = element;
  selectCity.appendChild(newCity);
})

document.querySelector("#cityselect").addEventListener("click", (e) => {
  const selectedCities = data.filter(cities => e.target.value === cities.name);
  createTableElements(selectedCities, "singlecity");
})