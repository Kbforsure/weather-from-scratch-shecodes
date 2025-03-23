function handleSearchSumbit(event) {
  event.preventdefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSumbit);
