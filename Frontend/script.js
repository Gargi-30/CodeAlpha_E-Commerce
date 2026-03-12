if(!localStorage.getItem("user")){

window.location.href="login.html"

}

let user = localStorage.getItem("user")

if(user){
document.getElementById("username").innerText = "Welcome " + user
}
let cart = JSON.parse(localStorage.getItem("cart")) || [];

document.getElementById("cart-count").innerText = cart.length;

fetch("http://localhost:5000/products")
.then(res => res.json())
.then(data => {

const container = document.getElementById("products")

data.forEach(product => {

const div = document.createElement("div")
div.className = "card"

div.innerHTML = `
<img src="${product.image}" class="product-img">
<h2>${product.name}</h2>
<p>Price: ₹${product.price}</p>
<p>${product.description}</p>

<button onclick="addToCart('${product._id}','${product.name}',${product.price},'${product.image}')">
Add to Cart
</button>
`

container.appendChild(div)

})

})

function addToCart(id,name,price,image){

const item = {id,name,price,image}

cart.push(item)

localStorage.setItem("cart",JSON.stringify(cart))

alert(name + " added to cart")

document.getElementById("cart-count").innerText = cart.length

}

function logout(){

localStorage.removeItem("user")

window.location.href="login.html"

}
