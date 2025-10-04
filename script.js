let mealSearch = document.getElementById("meal-search");
let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
  let input = mealSearch.value;
  search(input);
});

let search = async (input) => {
  let res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
  );
  let data = await res.json();
  console.log(data);
};
