import {cart, removeFromCart} from '../data/cart.js';
import { products } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });


  cartSummaryHTML += `
    <div class="cart-item-container 
    js-cart-item-container-${matchingProduct.id}">
            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingProduct.image}">
              <div class="cart-item-details">
                <div class="product-name">
                  ${matchingProduct.name}
                </div>
                <div class="product-quantity">
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                  <button class="delete-button">
                    Delete
                  </button>
                  </span>
                </div>
              </div>
              <div>
              <a href="${matchingProduct.link}">
              <button class="add-to-cart-button button-primary read-button">
              Read
              </button>
              </a>
            </div>
              </div>
              
            </div>
          </div>
  `
});

document.querySelector('.js-order-summary')
.innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);

      const container = document.querySelector(
        `.js-cart-item-container-${productId}`)
        container.remove();
    });
  });
