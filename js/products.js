//  ${
//     item.like === true
//     ?
//     "<i id='favorite' onclick='addToFavorite(" + item.id + ")' class='fas fa-heart'></i>"
//     :
//     "<i id='favorite' onclick='addToFavorite(" + item.id + ")' class='fa fa-heart'></i>"
// }

// <<<<<<<<<<<<<<<< var >>>>>>>>>>>
let Products = JSON.parse(localStorage.getItem("DB_Items")) || ProductsData;
let productDom = document.querySelector(".products")
let cartArray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
let favArray = localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [];

// if (cartArray) {
//     let counterBadge = document.querySelector(".count-badge");
    
//     counterBadge.style.display = "block";
//     counterBadge.innerHTML = cartArray.length;
//     console.log( 'text contentn' ,counterBadge.textContent)
//     console.log(counterBadge.style);

// }

// <<<<<<<<<<<<<<<< func >>>>>>>>>>>
function DrowProUI(Products = []) {
    let ProductUI = Products.map(item => {
        // console.log(item);
        return `<div class="item">
        <div class="overflay-item"></div>
        <div class="item-img">
        <img src="${item.imgUrl}">
        <a href="#"></a>
        </div>
        <div class="item-content">
        <h1>  ${item.title}</h1>
        <p><b> color : </b>${item.color}</p>
        <p><b>memory : </b>${item.memory}</p>
        <p><b>address : </b>${item.address} </p>
        </div>
        <div class="item-action">
        <i  id="add-cart" onclick="addToCart(${item.id})" class="fa fa-cart-plus"></i>
        <i id="favorite"  onclick="addToFavorite(${item.id})" class="${item.like ===true ? 'fab fa-heart' : 'far fa-heart'}" ></i>    
        
        </div>
        </div>`
        
    })
    productDom.innerHTML = ProductUI.join("");
}
DrowProUI(Products)


//         <i id="favorite" onclick="addToFavorite(${item.id})" class="far fa-heart"></i>




function addToCart(id) {
    if(localStorage.getItem("username")){
        let addItem = Products.find((items) => items.id === id)
        let isItemIn = cartArray.some((items) => items.id === addItem.id)
        
        if (isItemIn) {
            cartArray = cartArray.map((item) => {
                if (item.id === addItem.id) item.quantity += 1;
                    
                
                return item;
            })         
        } else {
            cartArray.push(addItem)
        }
        
        
        localStorage.setItem("cart", JSON.stringify(cartArray))
        
        
        let counterBadge = document.querySelector(".count-badge");
        console.log(cartArray.length);
        counterBadge.style.display = "block"
        counterBadge.innerHTML = cartArray.length
       
        
        
        
        } else {
            alert("sign up First")
        }
    
}

function BBBAdge() {
        cartArray.map((item) =>{
        let cartMenuDom = document.querySelector(".title-qu");
        cartMenuDom.innerHTML += `<p>${item.title}</p>` 
        let cartLength = document.querySelectorAll(".title-qu p")
        
        let counterBadge = document.querySelector(".count-badge");
         counterBadge.style.display= "block"
         counterBadge.innerHTML = cartLength.length ;
         
        })
}


function addToFavorite(id) {
    
    let itemFav = Products.find((item) => item.id === id)
    
    
    let itemIsFav = favArray.some((item) => item.id === itemFav.id)

    if (itemIsFav) {
        favArray = favArray.map((item) => {
            if (item.id === itemFav.id) item.like === true;
            return item;
        })
    } else{
             favArray.push(itemFav)
           }    
    localStorage.setItem("favorite" , JSON.stringify(favArray))
  
    
}