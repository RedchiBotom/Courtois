
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.add-to-cart');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const product = {
        name: btn.dataset.name,
        price: parseFloat(btn.dataset.price),
        image: btn.dataset.image,
        quantity: 1
      };

      let cart = JSON.parse(localStorage.getItem('cart')) || [];

      const existing = cart.find(item => item.name === product.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push(product);
      }

      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Ajouté au panier : ' + product.name);
    });
  });
});
