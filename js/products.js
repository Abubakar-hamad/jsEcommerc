// <<<<<<<<<<<<<<<< var >>>>>>>>>>>
let productDom = document.querySelector(".products")
let Products = JSON.parse(localStorage.getItem("DB_Items")) || localStorage.setItem("DB_Items", JSON.stringify(ProductsData)) || (productDom.innerHTML = "<h1 style='text-align: center;color:#fff ; margin-top: 150px ; background-color:#0f3c4c'>Please Refresh The Page ^.^</h1>");
let cartArray = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];
let favArray = localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [];
let searchInput = document.getElementById("search")
let sizeFilter = document.getElementById("filter");
let createnewbtn = document.getElementById("createItem");

// <<<<<<<<<<<<<<<< event >>>>>>>>>>>

searchInput.addEventListener("keyup", function (e) {
    Search(e.target.value, JSON.parse(localStorage.getItem("DB_Items")))
    if (searchInput == "") {
        productDom.innerHTML="<h1>nmoasdija</h1>"
    }
})


function Search(text, ItemArray) {
    let result = ItemArray.filter((item) => item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1);
    console.log(result);

    DrowProUI(result);

}

sizeFilter.addEventListener("change", function (e) {
    e.preventDefault();
    let optionSelect = e.target.value;
    if (optionSelect === "all") {
        DrowProUI(Products)
    } else {
        Products = Products.filter((items) => items.memory === optionSelect)
        DrowProUI(Products)
        
    }
 
})




createnewbtn.addEventListener("click", () => {
    setTimeout(()=>{
        window.location="createProduct.html"
    }, 500)
})

// <<<<<<<<<<<<<<<< func >>>>>>>>>>>
function DrowProUI(Products = []) {
    let ProductUI = Products.map(item => {
        // console.log(item);
        return `<div style="${item.isMe == "Y" ? 'border:solid 10px #134b5f' : ''}" class="item">
        <div class="overflay-item"></div>
        <div class="item-img">
       
        <img  onclick="itemDetails(${item.id})" src="${item.imgUrl}">
        
        </div>
        <div class="item-content">
        <h1>  ${item.title}</h1>
        <p><b> color : </b>${item.color}</p>
        <p><b>memory : </b>${item.memory}</p>
        <p><b>price : </b>${item.price} </p>
        </div>
        <div class="item-action">
        <i style="${item.isMe == "Y" ? 'display: none;' : 'display: block;'}" id="add-cart" onclick="addToCart(${item.id})" class="fa fa-cart-plus"></i>
        <i style="${item.isMe == "Y" ? 'display: none;' : 'display: block;'}"  id="favorite"  onclick="addToFavorite(${item.id})" class="far fa-heart" ></i>    
        <i style="${item.isMe == "Y" ? 'display: block;' : 'display: none;'}" id="edititem" onclick="edititem(${item.id})" class="fa fa-edit" ></i>
        <i style="${item.isMe == "Y" ? 'display: block;' : 'display: none;'}" id="deletitem" onclick="deleltitem(${item.id})" class="fa fa-trash-alt" ></i>
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

function addToFavorite(id) {
    let itemFav = Products.find((item) => item.id === id)
    
    
    let itemIsFav = favArray.some((item) => item.id === itemFav.id)
    
    if (itemIsFav) {
        favArray = favArray.map((item) => {
            if (item.id === itemFav.id) item.like = "true" ;
            alert("item already added !!")
            return item;
            // iconHeart.classList.add("fa fa-heart")

        })
    } else{
             favArray.push(itemFav)
    }  
    alert("item Added to favorite Items ..")
    
    localStorage.setItem("favorite" , JSON.stringify(favArray))
  
    
}


function itemDetails(id) {
    let item = Products.find((items)=> items.id === id)
    console.log(item);
    localStorage.setItem("Details" , JSON.stringify(id))
    setTimeout(()=>{
        window.location = "product-details.html";
    },500)
}



function deleltitem(id) {
    console.log(id);

    item = Products.find(items => items.id ==id)
    console.log(item);
    itemLocation = Products.indexOf(item)
    console.log(itemLocation);
    Products.splice(itemLocation, 1)
    localStorage.setItem("DB_Items", JSON.stringify(Products))
    
    console.log(deleteDom.textContent);
    setTimeout(() => {
    DrowProUI(Products); 
    }, 2000)

}


function edititem(id) {
    item = Products.find(items => items.id == id)
    console.log(item);
    localStorage.setItem("EditItem", JSON.stringify(item))
    setTimeout(() => {
        window.location = "edit-item.html";
    } , 2000)
}