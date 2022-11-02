document.querySelector("#addIngredientsBtn")?.addEventListener("click", () => {
  let newinput = document.querySelector(".ingredient-input").cloneNode(true);
  newinput.value = "";
  newinput.placeholder = "Enter the ingredient";

  document.querySelector(".ingredientList").appendChild(newinput);
});
