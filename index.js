const productsCart = [
  {
    id: 1,
    name: "",
    price: 0.0,
  },
];

const products = [
  {
    nome: "Banana",
    preco: 8.99,
  },
  {
    nome: "Água Tônica",
    preco: 4.58,
  },
  {
    nome: "Bolo de Limão",
    preco: 59.95,
  },
  {
    nome: "Coca-cola em lata",
    preco: 5.99,
  },
  {
    nome: "Guaraná Tuchaua",
    preco: 5.99,
  },
];

const body = document.querySelector("body");
const btnFinalize = document.createElement("button");
const main = document.createElement("main");
const productList = document.createElement("ul");
const productsDetails = document.createElement("ul");
const tag_h1 = document.createElement("h1");

tag_h1.innerText = "Virtual Market";
productList.id = "productList";
productsDetails.id = "productsDetails";

body.appendChild(tag_h1);
body.appendChild(main);
main.appendChild(productList);
main.appendChild(productsDetails);

let soma = 0;

btnFinalize.innerText = "Finalizar compra";

function refreshList() {
  soma = 0;

  let productItem = document.createElement("li");
  let item = document.createElement("p");
  let price = document.createElement("p");
  item.innerText = 'Item';
  price.innerText = 'Valor';

  productItem.appendChild(item);
  productItem.appendChild(price);
  productItem.id = 'li-cabecalho';
  productList.appendChild(productItem);

  for (let i = 0; i < products.length; i++) {
    let productItem = document.createElement("li");
    let item = document.createElement("p");
    let price = document.createElement("p");

    item.innerText = products[i].nome;
    price.innerText = "R$ " + products[i].preco;

    productItem.appendChild(item);
    productItem.appendChild(price);

    productList.appendChild(productItem);

    soma += products[i].preco;
  }
  let totalText = document.createElement("p");
  let totalPrice = document.createElement("p");

  totalText.innerText = "Total";
  totalPrice.innerText = "R$ " + soma.toFixed(2);

  let li = document.createElement("li");
  let liBtn = document.createElement("li");
  let divTotal = document.createElement("div");
  divTotal.id = "divTotal";

  li.appendChild(totalText);
  li.appendChild(totalPrice);
  li.id = "li-total";
  liBtn.id = "li-btn";
  liBtn.appendChild(btnFinalize);
  productsDetails.appendChild(li);
  productsDetails.appendChild(liBtn);
}

refreshList();
