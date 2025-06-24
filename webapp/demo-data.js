const demoProducts = [
  {
    id: 1,
    name: "Таз пластиковый",
    category: "хозтовары",
    image: "https://via.placeholder.com/300x200.png?text=Таз",
    opt_price: 100,
    retail_price: 120
  },
  {
    id: 2,
    name: "Кран водяной",
    category: "сантехника",
    image: "https://via.placeholder.com/300x200.png?text=Кран",
    opt_price: 150,
    retail_price: 180
  },
  {
    id: 3,
    name: "Удлинитель 5м",
    category: "электрика",
    image: "https://via.placeholder.com/300x200.png?text=Удлинитель",
    opt_price: 200,
    retail_price: 240
  }
];

const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("categoryFilter");

function renderProducts(products) {
  productList.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <div class="card-body">
        <div class="card-title">${product.name}</div>
        <div class="card-price">Опт: ${product.opt_price} сом<br>Розница: ${product.retail_price} сом</div>
        <button class="btn">🛒 В корзину</button>
      </div>
    `;
    productList.appendChild(card);
  });
}

categoryFilter.addEventListener("change", () => {
  const selected = categoryFilter.value;
  if (selected === "all") {
    renderProducts(demoProducts);
  } else {
    const filtered = demoProducts.filter(p => p.category === selected);
    renderProducts(filtered);
  }
});

// Запускаем начальный рендер после объявления demoProducts
renderProducts(demoProducts);
