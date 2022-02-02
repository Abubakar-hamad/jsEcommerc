
let lnguageBar = document.querySelector(".header-lang");
let header = document.querySelector(".heder");

let user = localStorage.getItem("username");

// let cartIcon = document.getElementById("cart-nav");
let cartArr = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];




lnguageBar.innerHTML =`<ul class="ul-style lang-bar" >
<li>AR</li>
<li>EN</li>
</ul>
`

header.innerHTML =`<div class="logo">
<h3  onclick="homePath()" class="brand">JSEcommerce</h3>
</div>
<nav>
<ul class="ul-style hover">

<li><a href="products.html">Products</a></li>
<li><a href="">favorite</a></li>
<li><a href="">my Item</a></li>
</ul>

<ul class="ul-style cart-icon">
<li onclick="cartPage()" class="cart-li"><i id="cart-nav" class="fa fa-shopping-cart" ><span class="count-badge"></span></i>
<div class = "cart-products">
<div class="title-qu"></div>
<a class="btn-cart" href="">veiw all</a>
</div>
</li>
</ul>

<ul class="dropdown-ul" id="userUnlogged" >
    <li onclick="hover()">login</li> <i onclick="hover()" class="fas fa-angle-down fa-large "></i>
    <div class="link">
    <a href="login.html">login</a>
    <a href="register.html">register</a>
    </div>
</ul>

<ul class="dropdown-ul" id="userLogged" >
    <li onclick="hover()">${user}</li> <i onclick="hover()" class="fas fa-angle-down fa-large "></i>
    <div class="link">
    <a href="">${user}</a>
    <a onclick='logOut()'>logout</a>
    </div>
</ul>
</nav>`;


function homePath() {
    window.location="index.html"
}

function hover(){

    
    let link = document.querySelector(".link");
    if (link.innerHTML !== '') {
    if (link.style.display == 'none') {
        link.style.display = 'block';
    } else {
        link.style.display = 'none'
    }
    }  
  
}

function logOut() {
    // let links = document.querySelectorAll(".link a")
    localStorage.clear();
    setTimeout(() => {
        window.location= "register.html"
    }, 500)
    console.log("logout");
}


 console.log(cartArr);
 cartArr.map((item) =>{
    let cartMenuDom = document.querySelector(".title-qu");
    cartMenuDom.innerHTML += `<p>${item.title} || ${item.quantity}</p>` 
        let cartLength = document.querySelectorAll(".title-qu p")
        let counterBadge = document.querySelector(".count-badge");
        counterBadge.style.display= "block"
     counterBadge.innerHTML = cartLength.length;
     
    })




    
function cartPage() {
    setTimeout(() => {
         window.location="cart.html"
     },500)
 }
