<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Gautam Pickle's</title>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

<style>
/* ================= GLOBAL STYLES ================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

html {
  scroll-behavior: smooth; /* Smooth scrolling */
}

body {
  background: #fff8e1;
  color: #333;
}

/* ================= NAVBAR ================= */
nav {
  position: fixed;
  width: 100%;
  background: #ff5722;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  z-index: 1000;
}

nav h2 {
  font-weight: 600;
}

nav ul {
  display: flex;
  list-style: none;
}

nav ul li {
  margin-left: 25px;
}

nav ul li a {
  text-decoration: none;
  color: white;
  transition: 0.3s;
}

nav ul li a:hover {
  color: yellow;
}

/* ================= HERO ================= */
.hero {
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
              url('https://images.unsplash.com/photo-1604908176997-125f25cc6f3d');
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
}

.hero h1 {
  font-size: 3rem;
}

.hero p {
  margin-top: 10px;
  font-size: 1.2rem;
}

/* ================= SECTION ================= */
section {
  padding: 80px 50px;
  text-align: center;
}

/* ================= PRODUCTS ================= */
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.product {
  background: white;
  padding: 15px;
  border-radius: 10px;
  transition: 0.3s;
}

.product:hover {
  transform: translateY(-10px);
}

.product img {
  width: 100%;
  border-radius: 10px;
}

button {
  margin-top: 10px;
  padding: 10px;
  border: none;
  background: #4caf50;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

button:hover {
  background: #2e7d32;
}

/* ================= CONTACT ================= */
form {
  max-width: 400px;
  margin: auto;
}

form input, form textarea {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
}

form button {
  background: #ff5722;
}

/* ================= FOOTER ================= */
footer {
  background: #333;
  color: white;
  padding: 20px;
}

footer i {
  margin: 10px;
  cursor: pointer;
}

/* ================= ANIMATION ================= */
.fade {
  opacity: 0;
  transform: translateY(30px);
  transition: 1s;
}

.fade.show {
  opacity: 1;
  transform: translateY(0);
}

/* ================= RESPONSIVE ================= */
@media(max-width:768px){
  nav {
    flex-direction: column;
  }
}
</style>
</head>

<body>

<!-- ================= NAVBAR ================= -->
<nav>
  <h2>Gautam Pickle's</h2>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#products">Products</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- ================= HOME ================= -->
<section id="home" class="hero">
  <div>
    <h1>Gautam Pickle's</h1>
    <p>Ghar ka asli swaad</p>
  </div>
</section>

<!-- ================= ABOUT ================= -->
<section id="about" class="fade">
  <h2>About Us</h2>
  <p>We provide homemade traditional pickles made with love and authentic spices.
     Experience the real taste of India with our handcrafted achar.</p>
</section>

<!-- ================= PRODUCTS ================= -->
<section id="products" class="fade">
  <h2>Our Pickles</h2>
  <div class="products">

    <!-- PRODUCT CARD -->
    <div class="product">
      <img src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d">
      <h3>Aam ka Achar</h3>
      <p>₹300</p>
      <button onclick="order('Aam ka Achar')">Order Now</button>
    </div>

    <div class="product">
      <img src="https://images.unsplash.com/photo-1625944525533-473f1f8f7d6e">
      <h3>Amla ka Achar</h3>
      <p>₹300</p>
      <button onclick="order('Amla ka Achar')">Order Now</button>
    </div>

    <div class="product">
      <img src="https://images.unsplash.com/photo-1598514982846-1c9f0c5b38b3">
      <h3>Bhindi ka Achar</h3>
      <p>₹300</p>
      <button onclick="order('Bhindi ka Achar')">Order Now</button>
    </div>

    <div class="product">
      <img src="https://images.unsplash.com/photo-1617191518004-cb7cbb5d2c2c">
      <h3>Karela ka Achar</h3>
      <p>₹300</p>
      <button onclick="order('Karela ka Achar')">Order Now</button>
    </div>

  </div>
</section>

<!-- ================= CONTACT ================= -->
<section id="contact" class="fade">
  <h2>Contact Us</h2>

  <!-- EmailJS form -->
  <form id="contact-form">
    <input type="text" name="user_name" placeholder="Your Name" required>
    <input type="tel" name="user_phone" placeholder="Phone Number" required>
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit">Send Message</button>
  </form>
</section>

<!-- ================= FOOTER ================= -->
<footer>
  <p>© 2026 Gautam Pickle's</p>
  <p>Follow us:</p>
  <i>🌐</i>
  <i>📘</i>
  <i>📸</i>
</footer>

<!-- ================= JS ================= -->

<!-- EmailJS Script -->
<script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

<script>
/* ================= EMAILJS INIT ================= */
// Replace with your EmailJS Public Key
(function(){
  emailjs.init("YOUR_PUBLIC_KEY");
})();

/* ================= CONTACT FORM ================= */
document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
  .then(function(){
    alert("Message Sent Successfully!");
  }, function(error){
    alert("Failed to send message");
  });
});

/* ================= WHATSAPP ORDER ================= */
function order(product){
  // Replace with your WhatsApp number
  let number = "919999999999";
  
  let message = `Hello, I want to order ${product} for ₹300.`;
  
  let url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  
  window.open(url, "_blank");
}

/* ================= SCROLL ANIMATION ================= */
const fades = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  fades.forEach(el => {
    let position = el.getBoundingClientRect().top;
    let screen = window.innerHeight;

    if(position < screen - 100){
      el.classList.add("show");
    }
  });
});
</script>

</body>
</html>