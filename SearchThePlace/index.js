const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const places = [];

const fetchCities = async () => {
  const path =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
  const result = await fetch(path);
  const data = await result.json();
  places.push(...data);
};
fetchCities();

const filterCities = (searchKeyword, list) => {
  return list.filter((place) => {
    const regex = new RegExp(searchKeyword, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};

function highlightKeyWord(term, value) {
  const regex = new RegExp(value, "gi");
  return term.replace(regex, `<span class='hl'>${value}</span>`);
}

function displayPlaces() {
  let listhtml = "";
  const myPlaces = filterCities(this.value, places);

  listhtml = myPlaces
    .map((place) => {
      const highlightedCity = highlightKeyWord(place.city, this.value);
      const highlightedState = highlightKeyWord(place.state, this.value);
      return `<li><span class='name'>${highlightedCity}, ${highlightedState}</span></li>`;
    })
    .join("");

  if (!this.value) listhtml = `<li>Filter for a city</li><li>or a state</li>`;
  
  suggestions.innerHTML = listhtml;
}

search.addEventListener("change", displayPlaces);
search.addEventListener("keyup", displayPlaces);
