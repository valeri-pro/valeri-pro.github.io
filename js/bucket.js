const bucketItemsContainerElement = document.querySelector(
  "#bucketItemsContainer"
);
const itemsContainerElement = document.querySelector("#itemsContainer");
const bucketCounterElement = document.getElementById("bucketCounter");
const bucketCounter2Element = document.getElementById("bucketCounter2");
const totalElement = document.getElementById("total");

//ключи
const BUCKET_KEY = "bucketItems";
const TOTAL_KEY = "total";
const COUNTER_KEY = "bucketCounter";

//
let bucketItems = JSON.parse(localStorage.getItem(BUCKET_KEY)) || [];
let bucketCounter = JSON.parse(localStorage.getItem(COUNTER_KEY)) || 0;
let total = JSON.parse(localStorage.getItem(TOTAL_KEY)) || 0;

const products = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/il_vicolo_460x580.png?v=1613758514",
    title: "'il vicolo' Marche IGT Rosato 2020",
    collection: "Other wines",
    year: "2020",
    price: 10.5,
  },

  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/bio_rossopiceno_460x580.png?v=1616061523",
    title: "BIO Rosso Piceno DOC 2020",
    collection: "Organic Collection",
    year: "2020",
    price: 7.2,
  },

  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/CCR_GrottediSantita_460x580.png?v=1638776257",
    title:
      "Grotte di Santità - Ancestrale BIO Sparkling Wine Zero Dosage from 100% Pecorino grapes 2020",
    collection: "Cold cuts and cheeses",
    year: "2020",
    price: 26.0,
  },

  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/508_diavoloevento_460x580.png?v=1618953731",
    title: "Diavolo e Vento® - Marche IGT Rosso 2015",
    collection: "508® Collection",
    year: "2015",
    price: 25.0,
  },

  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/Olimpus_Brut_grande_47f6c145-bdaa-43e5-ba91-8f4eea138cd5_460x580.png?v=1619791741",
    title: "Olimpus - Passerina Brut Sparkling Wine",
    collection: "Sparkling Collection",
    year: "2020",
    price: 9.9,
  },

  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/bio_pecorino_460x580.png?v=1613758553",
    title: "BIO Falerio Pecorino DOC 2020",
    collection: "Organic Collection",
    year: "2020",
    price: 8.1,
  },
  {
    id: 7,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/Cap.1_Marche_Passerina_e4e58fd8-a26f-413c-bed3-9d24188728ac_460x580.png?v=1618428559",
    title: "  Chapter n. 1 - Marche IGT Passerina 2020",
    collection: "Colli Ripani Collection",
    year: "2020",
    price: 6.9,
  },
  {
    id: 8,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/508_lajella_460x580.png?v=1613758628",
    title: "Lajella® - Offida DOCG Passerina 2020",
    collection: "508® Collection",
    year: "2020",
    price: 9.8,
  },
  {
    id: 9,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/olio3lt_111a81b5-b4a9-4828-b6fb-0c8d46da2dce_460x580.png?v=1641822963",
    title: "Sincerum BIO - Organic extra virgin olive oil 2021",
    collection: "Food products",
    year: "2021",
    price: 54.9,
  },

  {
    id: 10,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/mattonella-anffas_fronte_fb_460x580.png?v=1635875526",
    title: "Colli Ripani x Anffas Tile",
    collection: "Clothing and accessories",
    year: "2021",
    price: 5.0,
  },

  {
    id: 11,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/CCR_felpa-frstng-nera_460x580.png?v=1635978015",
    title: "FRSTNG sweatshirt",
    collection: "Clothing and accessories",
    year: "2021",
    price: 23.0,
  },
  {
    id: 12,
    img: "https://cdn.shopify.com/s/files/1/0538/7609/7209/products/Colli-Ripani_Pane_Olio_460x580.jpg?v=1642069883",
    title: "Pane+Olio Pack",
    collection: "Packaging",
    year: "2021",
    price: 33.9,
  },
];

//рендеры
renderBucket();
renderTotal();
renderCounter();
renderProducts();

//функции-рендеры
//забрасываем из объекта "products" в наш слайдер товары
function renderProducts() {
  let html = " ";
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    html += `<article class="product">
                <a class="card__image" href="./product.html">
                    <picture><img src=${product.img}/></picture>
                </a>
                <div class="card__info">
                    <span class="card__collection">${product.collection}</span>
                    <a class="card__title" href="./product.html">
                    <span class="production-year">${product.year}</span>
                    <h3 class="product-title">${product.title}</h3></a> 
                </div>
                <div class="card__price"> <strong>${product.price.toFixed(
                  2
                )} €</strong></div>
                <div class="card__addtocard" onclick="addToBucket(${
                  product.id
                })">Add</div>   
              </article>`;
  }
  itemsContainerElement.innerHTML = html;
}

//забрасываем товары из слайдера в корзину
function renderBucket() {
  let html = "";
  for (let i = 0; i < bucketItems.length; i++) {
    const product = bucketItems[i];
    html += `<div class="product row">
                  <picture> <img class="image-for-bucket" src=${
                    product.img
                  }/></picture> 
                  <div class="column">
                      <h3 class="card__title">${product.title}</h3>
                      <p class="product-action" onclick="removeFromBucket(${i})">Delete</p>
                  </div>
                  <div class="card__price">${product.price.toFixed(2)} €</div> 
                  </div>
             </div>`;
  }
  bucketItemsContainerElement.innerHTML = html;
}

function renderTotal() {
  totalElement.textContent = total.toFixed(2);
}

function renderCounter() {
  bucketCounterElement.textContent = bucketCounter;
  bucketCounter2Element.textContent = bucketCounter;
}

//добавление(+) и удаление(+) айтэмов из корзины
function addToBucket(productId) {
  const product = products.find((item) => item.id === productId);

  bucketItems.push(product);
  total = +(total + product.price);
  bucketCounter++;
  renderCounter();
  renderTotal();
  renderBucket();
  localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketItems));
  localStorage.setItem(COUNTER_KEY, bucketCounter);
  localStorage.setItem(TOTAL_KEY, total);
}
function removeFromBucket(itemIndex) {
  const productPrice = bucketItems[itemIndex].price;
  bucketItems.splice(itemIndex, 1);
  total = +(total - productPrice);
  bucketCounter--;
  renderCounter();
  renderTotal();
  renderBucket();
  localStorage.setItem(BUCKET_KEY, JSON.stringify(bucketItems));
  localStorage.setItem(COUNTER_KEY, bucketCounter);
  localStorage.setItem(TOTAL_KEY, total);
}
