document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;
  const notes = document.getElementById("notes").value;

  const message = 
    `New Order from MeatCrafter Website%0A
Name: ${name}%0A
Product: ${product}%0A
Quantity: ${quantity}kg%0A
Notes: ${notes}`;

  // WhatsApp
  window.open(`https://wa.me/263714893191?text=${message}`, "_blank");

  // Email
  window.location.href = 
    `mailto:704trader@gmail.com?subject=New MeatCrafter Order&body=${message}`;
});
