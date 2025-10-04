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

      let li = document.createElement("li");
      li.textContent = data.meals[0][key];
      let img = document.createElement("img");
      img.setAttribute(
        "src",
        `https://www.themealdb.com/images/ingredients/${data.meals[0][key]}.png`
      );
      li.appendChild(img);
      ul.appendChild(li);
    }
  }

  databox.appendChild(ul);
  let strInstruction = data.meals[0]["strInstructions"];
  let ingArr = strInstruction.split(".");

  let ul1 = document.createElement("ul");
  for (val of ingArr) {
    let li2 = document.createElement("li");
    li2.textContent = val;
    ul1.appendChild(li2);
  }
  console.log(ingArr);
  databox.appendChild(ul1);
};
