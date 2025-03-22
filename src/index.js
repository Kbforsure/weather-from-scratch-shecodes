function handleSearchSumbit(event) {
  event.preventdefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = searchInput.value;
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", handleSearchSumbit);
