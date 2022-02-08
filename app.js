//****DATA */
const products = [
  {
    img: "./assets/img/photo1.png",
    title: "Vintage Backbag",
    price: 10,
    oldPrice: 94.99,
  },
  {
    img: "./assets/img/photo2.png",
    title: "Levi Shoes",
    price: 20,
    oldPrice: 124.99,
  },
];

const totalSection = [
  {
    name: "Shipping",
    price: 19,
  },
  {
    name: "Total",
    price: 0,
  },
];

//***************Elements Selector */

const productSide = document.querySelector(".productSide");

//***********Global variable and function */

let total = totalSection[0].price;
function updateTotal() {
  return (val) => {
    total += val;
    console.log(total);
  };
}
console.log(total);
const update = updateTotal();

//****************Create News Element */

const row = document.createElement("div");

row.className = "row row-cols-1 g-4";
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
  img.style.height = "25%";

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
  update(product.price);

  btnIncrease.addEventListener("click", () => {
    let val = +text.innerHTML;
    val++;
    text.innerHTML = val;
    totalSection[1].price = total;
    update(product.price);
  });

  btnDecrease.addEventListener("click", () => {
    let val = +text.innerHTML;
    if (val < 1) {
      val;
    } else {
      val--;
      update(-product.price);
    }
    text.innerHTML = val;
  });

  row.appendChild(col);
  productSide.appendChild(row);
});

//************Total section */ */

totalSection.forEach((e) => {
  const line = document.createElement("hr");
  line.style.marginTop = "3rem";
  line.style.marginBottom = "0";
  line.style.padding = "0";
  line.style.border = "2px solid white";
  line.style.color = "white";
  row.appendChild(line);

  const footerTotal = document.createElement("div");
  footerTotal.className = "footerTotal d-flex justify-content-between";
  row.appendChild(footerTotal);

  const text1 = document.createElement("p");
  text1.textContent = `${e.name}`;
  const text2 = document.createElement("p");
  text2.textContent = `$${e.price}`;
  footerTotal.appendChild(text1);
  footerTotal.appendChild(text2);
});

console.log(total);

function counterIncrease() {} //! Sonradan forEach teki kısımları buraya al useable olabilmesi icin

function counterDecrease() {} //! Sonradan forEach teki kısımları buraya al useable olabilmesi icin
