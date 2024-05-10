const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/* Validate if constants exist */
if (navToggle) {
  /* Toggle menu when navToggle is clicked */
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle('show-menu');
  })};

  /* Hide menu when navClose is clicked */
 if (navClose){navClose.addEventListener("click", () => {
    navMenu.classList.remove('show-menu');
  })
} ;
/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
       cartShop = document.getElementById('cart-shop'),
       cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
  cartShop.addEventListener("click", () => {
    cart.classList.add('show-cart')
  })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
  cartClose.addEventListener("click", () => {
    cart.classList.remove('show-cart')
  })
}

/*=============== SHOW LOGIN ===============*/
const login = document.getElementById('login'),
       loginButton = document.getElementById('login-button'),
       loginClose = document.getElementById('login-close')

/*===== LOGIN SHOW =====*/
/* Validate if constant exists */
if(loginButton){
 loginButton.addEventListener("click", () => {
    login.classList.add('show-login')
  })
}

/*===== LOGIN HIDDEN =====*/
/* Validate if constant exists */
if(loginClose){
  loginClose.addEventListener("click", () => {
    login.classList.remove('show-login')
  })
}

/*=============== HOME SWIPER ===============*/

var homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: 'true',
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== NEW SWIPER ===============*/

var newSwiper = new Swiper(".new-swiper", {
  spaceBetween: 16,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: 'true',
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 
});


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the 'show-scroll' class to the element
  if (window.scrollY >= 350) 
    scrollUp.classList.add('show-scroll'); 
  else 
    scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*=============== LIGHT BOX ===============*/



/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.questions_item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.questions_header');
  accordionHeader.addEventListener('click', () => {
    const isOpen = item.classList.contains('accordion-open');
    closeAllItems(); // Close all items before opening the clicked one
    if (!isOpen) {
      toggleItem(item);
    }
  });
});

const closeAllItems = () => {
  const openItems = document.querySelectorAll('.accordion-open');
  openItems.forEach((item) => {
    toggleItem(item);
  });
};

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions_content');
  if (item.classList.contains('accordion-open')) {
    accordionContent.style.height = '0';
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};


/*=============== STYLE SWITCHER ===============*/
const styleSwitcherToggle = document.querySelector('.style_switcher-toggler');
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style_switcher').classList.toggle('open');
});
//HIDE STYLE SWITCHER ON SCROLL
window.addEventListener('scroll', () => {
  if(document.querySelector('.style_switcher').classList.contains('open')){
    document.querySelector('.style_switcher').classList.remove('open');
  }
})


//theme color



function themeColors() {
  const colorStyle = document.querySelector('.js-color-style');
  const themeColorsContainer = document.querySelector('.js-theme-colors');

  themeColorsContainer.addEventListener('click', ({ target }) => {
      if (target.classList.contains("js-theme-color-item")) {
          localStorage.setItem('color', target.getAttribute('data-js-theme-color'));
          setColors();
          // Remove 'active' class from all theme color items
          document.querySelectorAll('.js-theme-color-item.active').forEach(item => {
              item.classList.remove('active');
          });
          // Add 'active' class to the clicked theme color item
          target.classList.add("active");
      }
  });

  function setColors() {
      let path = colorStyle.getAttribute('href').split('/');
      path = path.slice(0, path.length - 1);
      colorStyle.setAttribute('href', path.join('/') + '/' + localStorage.getItem('color') + '.css');
  }

  // Set 'active' class for the initially selected theme color item
  const activeThemeColorItem = document.querySelector('.js-theme-color-item.active');
  if (activeThemeColorItem) {
      activeThemeColorItem.classList.remove("active");
  }
  const selectedColorItem = document.querySelector(`[data-js-theme-color="${localStorage.getItem('color')}"]`);
  if (selectedColorItem) {
      selectedColorItem.classList.add("active");
  }

  // Apply the default color if no color is stored in localStorage
  if (!localStorage.getItem("color")) {
      const defaultColor = colorStyle.getAttribute("href").split("/").pop().split(".").shift();
      document.querySelector(`[data-js-theme-color="${defaultColor}"]`).classList.add("active");
      setColors();
  }
}

themeColors();





// add to cart 


document.addEventListener("DOMContentLoaded", function() {
  const cartCloseBtn = document.getElementById("cart-close");
  const cartAmountNumbers = document.querySelectorAll(".cart_amount-number");
  const cartTrashIcons = document.querySelectorAll(".cart_amount-trash");
  const cartPricesTotal = document.querySelector(".cart_prices-total");
  const cartItemsNumber = document.querySelector(".cart_prices-item");
  const closeBtn = document.querySelector(".close");
  const checkoutBtn = document.querySelector(".checkout");
  
  // Close cart functionality
  cartCloseBtn.addEventListener("click", function() {
      document.getElementById("cart").style.display = "none";
  });

  // Quantity control functionality
  cartAmountNumbers.forEach(number => {
      const minusBtn = number.parentElement.querySelector(".bx-minus");
      const plusBtn = number.parentElement.querySelector(".bx-plus");

      minusBtn.addEventListener("click", function() {
          let value = parseInt(number.innerText);
          if (value > 1) {
              number.innerText = --value;
              updateCart();
          }
      });

      plusBtn.addEventListener("click", function() {
          let value = parseInt(number.innerText);
          number.innerText = ++value;
          updateCart();
      });
  });

  // Remove item from cart functionality
  cartTrashIcons.forEach(icon => {
      icon.addEventListener("click", function() {
          icon.closest(".cart_card").remove();
          updateCart();
      });
  });

  // Close cart functionality
  closeBtn.addEventListener("click", function() {
      document.getElementById("cart").style.display = "none";
  });

  // Checkout functionality (replace with actual checkout logic)
  checkoutBtn.addEventListener("click", function() {
      alert("Checkout functionality will be implemented here.");
  });

  // Update cart total
  function updateCart() {
      let totalItems = 0;
      let totalPrice = 0;
      document.querySelectorAll(".cart_card").forEach(card => {
          const price = parseFloat(card.querySelector(".cart_price").innerText.replace("$", ""));
          const quantity = parseInt(card.querySelector(".cart_amount-number").innerText);
          totalItems += quantity;
          totalPrice += price * quantity;
      });
      cartItemsNumber.innerText = totalItems + " item" + (totalItems !== 1 ? "s" : "");
      cartPricesTotal.innerText = "$" + totalPrice.toFixed(2);
  }
  
  // Initial update
  updateCart();

  // Add to cart detail
  const addToCartButtons = document.querySelectorAll('.new_button');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = button.closest('.new_content');
      const title = product.querySelector('.new_title').textContent;
      const price = product.querySelector('.new_price').textContent;
      const image = product.querySelector('.new_img').src;

      // Add the product to the cart
      addProductToCart(title, price, image);
    });
  });

  function addProductToCart(title, price, image) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');

    cartItem.innerHTML = `
      <img src="${image}" alt="${title}" class="cart_img">
      <h3 class="cart_title">${title}</h3>
      <span class="cart_price">${price}</span>
      <div class="cart_amount">
        <div class="cart_amount-content">
          <span class="cart_amount-box">
            <i class="bx bx-minus"></i>
          </span>
          <span class="cart_amount-number">1</span>
          <span class="cart_amount-box">
            <i class="bx bx-plus"></i>
          </span>
        </div>
        <i class="bx bx-trash-alt cart_amount-trash"></i>
      </div>
    `;

    const cartContainer = document.querySelector('#cart .cart_container');
    cartContainer.appendChild(cartItem);

    // Update the cart prices
    updateCartPrices();
  }

  function updateCartPrices() {
    const cartItems = document.querySelectorAll('#cart .cart_item');
    let totalPrice = 0;

    cartItems.forEach(item => {
      const price = parseFloat(item.querySelector('.cart_price').textContent.replace('$', ''));
      totalPrice += price;
    });

    document.querySelector('#cart .cart_prices-total').textContent = `$${totalPrice.toFixed(2)}`;
  }
});
