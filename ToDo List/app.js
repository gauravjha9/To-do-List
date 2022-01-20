let inputValue = document.getElementById("txt");
let btn = document.getElementById("btn");
let itemContainer = document.getElementById("contain");

btn.addEventListener("click", () => {
  var item = document.createElement("li");
  item.innerText = inputValue.value;
  item.classList.add("list-style");

  if (item.innerText === "") {
    alert("Input Box can't be empty.. Please Enter Something");
  } else {
    itemContainer.appendChild(item);
    inputValue.value = "";
  }

  item.addEventListener("click", () => {
      itemContainer.removeChild(item);
  });
});
