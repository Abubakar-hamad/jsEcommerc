// <<<<<<<<<<<<<<<<<var>>>>>>>>
let cartDom = document.querySelector(".carts");
// <<<<<<<<<<<<<<<<<var>>>>>>>>

// <<<<<<<<<<<<<<<<<function>>>>>>>>
let noContent = document.querySelector(".no-content");

console.log(cartArr);
if (cartArr == "") {
    
        noContent.style.display = "block";
        noContent.innerHTML="No Item In Cart ..."
    
}

function DrowCartUI() {
        let cartItem = cartArr.map((item) => {
            let i = 0; i < cartArr.length + 1; i++
            return `<div class="no-content"></div>
        <div class="carts">
        
    <div class="cart-item">
    <div class="number">${i}</div>
            
            <img src="${item.imgUrl}" alt="image-item">
       
        <div class="cart-content">
            <div class="cart-det">
                <b>${item.title}</b>
              <p>color:<b>${item.color}</b></p>
              <p>color:<b>${item.address}</b></p>
            </div>
            <div class="qun">
            <h3>quantity:${item.quantity}</h3>
            </div>
            <div class="arrows">
                <i id="arrow-plus"  onclick="plusQuantityItem(${item.id})"  class="fa fa-arrow-circle-up" ></i>
                <p class="quantity-value" >${item.quantity}</p>
                <i id="arrow-minus" onclick="minusQuantityItem(${item.id})"  class="fa fa-arrow-circle-down" ></i>
    
            </div>
        </div>
    </div>
    </div>
    <hr>`
        })
  
   
        cartDom.innerHTML = cartItem.join("")

        
    } 

DrowCartUI();

function plusQuantityItem(id) {

    // let item = cartArr.indexof(item)
    let item = cartArr.find((item => item.id == id))
    let itemLocation = cartArr.indexOf(item);
    cartArr[itemLocation].quantity += 1;
    localStorage.setItem("cart" , JSON.stringify(cartArr))
    DrowCartUI(cartArr);
}


function minusQuantityItem(id) {
    let item = cartArr.find((item) => item.id == id)
    console.log(item);  
    let itemLocation = cartArr.indexOf(item)
    console.log(itemLocation);
    console.log(itemLocation);
    cartArr[itemLocation].quantity -= 1;
    
        
    console.log(cartArr[itemLocation].quantity);
    cartArr[itemLocation].quantity == "0" && cartArr.splice(itemLocation, 1) ;

    localStorage.setItem("cart", JSON.stringify(cartArr))
    if( cartArr == ""){
    
        noContent.style.display = "block";
        noContent.innerHTML="No Item In Cart ..."
    }
    DrowCartUI(cartArr);
    
}