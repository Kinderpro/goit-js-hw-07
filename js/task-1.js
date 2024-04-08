const categories = document.querySelector("#categories");

const item = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${item.length}`);

item.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const itemCount = item.querySelectorAll("li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemCount}`);
});
