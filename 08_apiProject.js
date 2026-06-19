const body = document.querySelector(".body");

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=8");
    const data = await response.json();
    console.log(data);

    displayProducts(data.products);
  } catch (error) {
    console.log("Error:", error);
  }
}

function displayProducts(products) {
  products.forEach((product) => {
    let totalRating = 0;

    product.reviews.forEach((review) => {
      totalRating += review.rating;
    });

    const avgRating = (totalRating / product.reviews.length).toFixed(1);

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">

            <div class="card-content">

                <h2>${product.title}</h2>

                <p>${product.description}</p>

                <div class="rating">
                    ⭐ ${avgRating} / 5
                </div>

            </div>
        `;

    body.appendChild(card);
  });
}

fetchProducts();
