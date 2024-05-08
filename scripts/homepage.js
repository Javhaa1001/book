import {cart, addToCart, updateCartQuantity} from '../data/cart.js';

import {products} from '../data/products.js';

import { formatCurrency } from './utils/money.js';

let productsHTML = '';

products.forEach((product) =>{
  productsHTML +=`
      <div class="product-container">
              <div class="product-image-container">
                <img class="product-image"
                  src="${product.image}">
              </div>
              <div class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>
              <div class="product-rating-container">
                <img class="product-rating-stars"
                  src="images/ratings/rating-${product.rating.stars * 10}.png">
                <div class="product-rating-count link-primary">
                  ${product.rating.count}
                </div>
              </div>
              <div class="product-quantity-container">
              <button class="adder-to-wish add-to-cart-button button-primary js-add-to-cart"
              data-product-id="${product.id}">
              <img class="cart-icon" src="images/logo/wish-list (3).png">
              </button>
              </div>
              <div class="product-spacer"></div>
              <div class="added-to-cart2">
              <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                
                <div class="tooltip">Хүслийн жагсаалт руу нэмэх</div>
              </div>
              </div>
              <a href="wish-list.html">
              <button class="add-to-cart-button button-primary">
              Read
              <div class="tooltip">Номыг татах</div>
              </button>
              </a>
            </div>
  `;
},
);

document.querySelector('.js-products-grid').innerHTML = productsHTML;





document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;

      addToCart(productId);

      updateCartQuantity();

    });
  });
