const listCategories = document.querySelector("#categories");
const liWithClasses = listCategories.querySelectorAll(".item");

console.log(`Number of categories: ${liWithClasses.length}`);
const categoriesArray = [...liWithClasses]
  .map(
    categories => `Category: ${categories.children[0].textContent}
    Elements: ${categories.children[1].children.length}`
  )
  .join("\n");
console.log(categoriesArray);

