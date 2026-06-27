const priceTag = document.getElementById("price");

function fetchPrice() {
  const serverPrice = fetch("http://localhost:3000/random");
  serverPrice
    .then((response) => {
      return response.json();
    })
    .then((obj) => (priceTag.innerHTML = obj.price));
}

fetchPrice();
setInterval(fetchPrice, 1000);

/*

function fetchPrice() {
  return window.fetch('http://localhost:3000/random').then(res => res.json());
}

function renderPrice(price) {
  const priceElement = document.getElementById('price');
  priceElement.innerHTML = price;
}

fetchPrice()
  .then(res => res.price)
  .then(renderPrice);

setInterval(() => {
  fetchPrice()
    .then(res => res.price)
    .then(renderPrice);
}, 1000);

*/
