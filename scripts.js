const params = new URLSearchParams(window.location.search);

const product = params.get("product");
const price = params.get("price");

if (product) document.getElementById("product").value = product;
if (price) document.getElementById("price").value = price;

document.getElementById("quantity").addEventListener("input", function () {
  const qty = this.value;
  const total = qty * price;
  document.getElementById("total").value = total.toFixed(2);
});

document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const qty = document.getElementById("quantity").value;
  const total = document.getElementById("total").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const payment = document.getElementById("payment").value;
  const notes = document.getElementById("notes").value;

  const message =
`MEATCRAFTER ORDER
Name: ${name}
Product: ${product}
Quantity: ${qty}kg
Total: $${total}
Delivery: ${date} at ${time}
Payment: ${payment}
Notes: ${notes}`;

  // WhatsApp
  window.open(
    "https://wa.me/263714893191?text=" + encodeURIComponent(message),
    "_blank"
  );

  // Email
  window.location.href =
    "mailto:704trader@gmail.com?subject=New MeatCrafter Order&body=" +
    encodeURIComponent(message);
});
