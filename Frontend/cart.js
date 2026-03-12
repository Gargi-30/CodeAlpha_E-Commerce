if(!localStorage.getItem("user")){
window.location.href="login.html"
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const container = document.getElementById("cartItems");

let total = 0;

cart.forEach((item,index)=>{

const div = document.createElement("div");

div.className="card";

div.innerHTML=`
<img src="${item.image}" width="120">
<h3>${item.name}</h3>
<p>Price: ₹${item.price}</p>
<button onclick="removeItem(${index})">Remove</button>
`;

container.appendChild(div);

total += item.price;

});

document.getElementById("total").innerText = "Total: ₹" + total;

function removeItem(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

window.location.reload();

}

function checkout(){

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if(cart.length === 0){
alert("Cart is empty");
return;
}

alert("Order placed successfully!");

localStorage.removeItem("cart");

// redirect to homepage
window.location.href = "index.html";

}