let mealSearch = document.getElementById("meal-search");
let searchBtn = document.getElementById("search-btn");

let databox = document.getElementById("data");

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
  console.log(data.meals[0]);
  console.log(data.meals[0].strArea);
  let ul = document.createElement("ul");
  for (key in data.meals[0]) {
    if (key.includes("strIngredient") && data.meals[0][key] != "") {
      console.log(data.meals[0][key]);
      let li = document.createElement;
    }
  }
};
