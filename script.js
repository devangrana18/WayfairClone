const imgs = document.querySelectorAll(".home-cont-slider ul a img");
const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    console.log(n);
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next_btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

console.log("hi1")

let product = [
  {
    id: "1",
    image:
      "https://assets.wfcdn.com/im/78065324/resize-h400-w400%5Ecompr-r85/1793/179321431/default_name.jpg",
    sizes: "+8",
    name: "Bantam Solid Blackout Thermal Rod Pocket Curtain ",
    manufacturer: "by Beachcrest Home™",
    price: "21.99",
    rating: "⭐⭐⭐⭐",
    deliveryDays: "Set of 2",
    sale: true,
  },

  {
    id: "2",
    image:
      "https://assets.wfcdn.com/im/38937328/resize-h400-w400%5Ecompr-r85/2479/247933638/default_name.jpg",
    sizes: "+2",
    name: "Anita Hydraulic Lift Up Storage Upholstered Platform Bed",
    manufacturer: "by Ivy Bronx",
    price: "269.99",
    rating: "⭐⭐⭐⭐",
    deliveryDays: "Set of 1",
    sale: false,
  },
  {
    id: "3",
    image:
      "https://assets.wfcdn.com/im/16232498/resize-h900-w900%5Ecompr-r85/2227/222756913/Iddings+24%22+High+Metal+Indoor-Outdoor+Counter+Height+Stool+with+Back.jpg",
    sizes: "+8",
    name: "Iddings 24 High Metal Indoor-Outdoor",
    manufacturer: "by Trent Austin Design®",
    price: "79.99",
    rating: "⭐⭐⭐⭐",
    deliveryDays: "Set of 1",
    sale: true,
  },

  {
    id: "4",
    image:
      "https://assets.wfcdn.com/im/98060021/resize-h400-w400%5Ecompr-r85/2493/249367571/default_name.jpg",
    sizes: "+2",
    name: "Koree Standing Adjustable desk ",
    manufacturer: "by  Mercury Row®",
    price: "102.99",
    rating: "⭐⭐⭐⭐",
    deliveryDays: "Set of 2",
    sale: false,
  },
  {
    id: "5",
    image:
      "https://assets.wfcdn.com/im/32056107/resize-h400-w400%5Ecompr-r85/2751/275194361/default_name.jpg",
    sizes: "+8",
    name: "Campanelli Coffee Table",
    manufacturer: "by Mercury Row®",
    price: "129.99",
    rating: "⭐⭐⭐⭐",
    deliveryDays: "Set of 1",
    sale: true,
  },
];
function createProductCard(product) {
  let card = document.createElement("div");
  card.classList.add("product-card");

  let image = document.createElement("img");
  image.classList.add("product-img");
  image.src = product.image;
  image.alt = product.name;
  card.appendChild(image);

  let sizeAvailability = document.createElement("p");
  sizeAvailability.classList.add("product-size");
  sizeAvailability.textContent = product.sizes;
  card.appendChild(sizeAvailability);

  let productName = document.createElement("h3");
  productName.classList.add("product-name");
  productName.textContent = product.name;
  card.appendChild(productName);

  let Manufactured = document.createElement("p");
  Manufactured.classList.add("product-manufacturer");
  Manufactured.textContent = product.manufacturer;
  card.appendChild(Manufactured);

  let price = document.createElement("p");
  price.classList.add("product-price");
  price.textContent = `$${product.price}`;
  card.appendChild(price);

  let rating = document.createElement("p");
  rating.classList.add("product-rating");
  rating.textContent = `Rating: ${product.rating}`;
  card.appendChild(rating);

  let deliveryDays = document.createElement("p");
  deliveryDays.classList.add("product-delivery");
  deliveryDays.textContent = product.deliveryDays;
  card.appendChild(deliveryDays);

  return card;
}

function addProductCards() {
    let container = document.getElementById("dealofday");
  
    product.forEach((product) => {
      let productCard = createProductCard(product);
      container.appendChild(productCard);
    });
  }
  
  window.onload = function () {
    addProductCards();
  };

   let video = document.createElement('video');
   video.classList.add("video")
   video.src = 'https://secure.img1-fg.wfcdn.com/dm/video/1283164e-3470-4c9f-a544-113876547bab/wfusca_upholstery_comfort_lhpbanner_bau_desktop.mp4';
   video.type = 'video/mp4';
   video.autoplay = true; 
   video.loop = true; 
   

   document.getElementById('video-container').appendChild(video);
  
