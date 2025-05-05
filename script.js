document.addEventListener('DOMContentLoaded', () => {
    fetch('products.json')
      .then(response => response.json())
      .then(products => {
        const container = document.getElementById('productList');
        products.forEach(product => {
          const card = document.createElement('div');
          card.className = 'product-card';
          card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          `;
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Failed to load products:', error);
      });
  });
