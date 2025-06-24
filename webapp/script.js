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

renderProducts(demoProducts);
