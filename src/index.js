function searchCity(city) {
  let apiKey = "do8e05a55a39a74t37328f1154eb845f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
