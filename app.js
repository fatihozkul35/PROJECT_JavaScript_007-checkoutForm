// // *** Elements Selector

// const productCounter = document.querySelectorAll(".productCounter");

// productCounter.forEach(function (e) {
//   const btnDown = e.children[0];
//   const btnUp = e.children[2];

//   btnDown.addEventListener("click", counterDown);
//   btnUp.addEventListener("click", counterUp);
// });

// function counterDown(e) {
//   let counterP = e.target.parentElement.nextElementSibling.textContent;
//   let counter = counterP;
//   counter > 0 ? counter-- : counter;
//   e.target.parentElement.nextElementSibling.textContent = counter;
// }
// function counterUp(e) {
//   // e.stopPropagation();
//   console.log(e.currentTarget.className);
//   let counterP = e.target.parentElement.previousElementSibling.textContent;
//   let counter = counterP;
//   if (e.target.parentElement.previousElementSibling.dataset.id === "at") return;
//   counter++;

//   e.target.parentElement.previousElementSibling.textContent = counter;
// }
//****DATA */
const products = [
  {
    img: "./assets/img/photo1.png",
    title: "Vintage Backbag",
    price: 54.99,
    oldPrice: 94.99,
  },
  {
    img: "./assets/img/photo2.png",
    title: "Levi Shoes",
    price: 74.99,
    oldPrice: 124.99,
  },
  {
    img: "./assets/img/photo1.png",
    title: "Vintage Backbag",
    price: 54.99,
    oldPrice: 94.99,
  },
  {
    img: "./assets/img/photo2.png",
    title: "Levi Shoes",
    price: 74.99,
    oldPrice: 124.99,
  },
];

//***************Elements Selector */

const productSide = document.querySelector(".productSide");
let total = 0;
//****************Create News Element */
function updateTotal() {
  return (val) => {
    console.log(val + total);
    total += val;
  };
}

const test = updateTotal();

const row = document.createElement("div");
row.className = "row row-cols-2 g-4";
let col;
products.forEach((product) => {
  col = document.createElement("div");
  col.className = "col";

  const card = document.createElement("div");
  card.className = "card d-flex flex-row";

  const img = document.createElement("img");
  img.className = "card-img-top";
  img.src = product.img;
  img.alt = "here is a product image";
  img.style.width = "33%";

  const cardBody = document.createElement("div");
  cardBody.className =
    "card-body d-flex flex-column justify-content-between align-items-flex-start";

  const cardBodyTop = document.createElement("div");
  cardBodyTop.className = "cardBodyTop d-flex flex-column";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML = product.title;

  const price = document.createElement("strong");
  price.innerHTML = `$${product.price}`;
  const oldPrice = document.createElement("span");
  oldPrice.innerHTML = `$${product.oldPrice}`;

  const cardBodyBottom = document.createElement("div");
  cardBodyBottom.className =
    "cardBodyBottom d-flex justify-content-flex-start align-items-center";

  const btnDecrease = document.createElement("button");
  btnDecrease.className = "rounded-pill";
  const iconMinus = document.createElement("i");
  iconMinus.className = "fas fa-minus";

  const text = document.createElement("p");
  text.className = "p-3";
  text.innerHTML = "1";

  const btnIncrease = document.createElement("button");
  btnIncrease.className = "rounded-pill";
  const iconPlus = document.createElement("i");
  iconPlus.className = "fas fa-plus";

  //*****************AppendChild */

  col.appendChild(card);
  card.appendChild(img);
  card.appendChild(cardBody);
  cardBody.appendChild(cardBodyTop);
  cardBody.appendChild(cardBodyBottom);

  cardBodyTop.appendChild(title);
  cardBodyTop.appendChild(price);
  cardBodyTop.appendChild(oldPrice);

  cardBodyBottom.appendChild(btnDecrease);
  cardBodyBottom.appendChild(text);
  cardBodyBottom.appendChild(btnIncrease);

  btnIncrease.appendChild(iconPlus);
  btnDecrease.appendChild(iconMinus);

  // ******** Functions

  btnIncrease.addEventListener("click", () => {
    let val = +text.innerHTML;
    val++;
    text.innerHTML = val;
    test(product.price * val);
    //updateTotal(product.price * val);
  });

  btnDecrease.addEventListener("click", () => {
    let val = +text.innerHTML;
    val--;
    text.innerHTML = val;
  });

  row.appendChild(col);
  productSide.appendChild(row);
});

function counterIncrease() {
  console.log("object");
}

function counterDecrease() {
  let val = +text.innerHTML;
  val--;
  text.innerHTML = val;
  console.log("object");
}
