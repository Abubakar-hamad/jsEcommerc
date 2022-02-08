// <<<<<<<<<<<<<<<<<var>>>>>>>>
let cartDom = document.querySelector(".carts");
// <<<<<<<<<<<<<<<<<var>>>>>>>>

// <<<<<<<<<<<<<<<<<function>>>>>>>>
let noContent = document.querySelector(".no-content");
let cartAllDom = document.querySelector(".carts-flex")
console.log(cartArr);
if (cartArr == "") {
    
        noContent.style.display = "block";
        noContent.innerHTML="No Item In Cart ..."
        cartAllDom.style.display = "none"
}



function DrowCartUI() {
        let cartItem = cartArr.map((item) => {
            let number = cartArr.indexOf(item) + 1;
            let itemPrice = item.quantity * item.price; 
            let priceOfQn = cartArr.map(item => item.quantity * item.price) ;
            let totalpriceOfQn = priceOfQn.reduce((sum , current) =>  sum + current)
            let totalQn = cartArr.map(item => item.quantity)
            let sumpriceOfQn = totalQn.reduce((sum , current) => sum + current)
            return `
            <div class="no-content"></div>
            
            <div class="carts-flex">
    
    <!-- -------------start flex one -->
                <div class="item-cart-flex1">
                    <div class="carts">
                        <div class="cart-item">
                                <div class="number"><span>${number}- </span></div>
    
                                <img src="${item.imgUrl}" alt="image-item">
                        
                            <div class="cart-content">
                                <div class="cart-det">
                                    <b>${item.title}</b>
                                    <p>color : <b>${item.color}</b></p>
                                    <p >price : <b class="total-price">${item.price} </b>$</p>
                                </div>
                                <div class="qun">
                                    <h3>Price:${itemPrice} $</h3>
                                </div>
                                <div class="arrows">
                                    <i id="arrow-plus"  onclick="plusQuantityItem(${item.id})"  class="fa fa-arrow-circle-up" ></i>
                                    <p class="quantity-value" >${item.quantity}</p>
                                    <i id="arrow-minus" onclick="minusQuantityItem(${item.id})"  class="fa fa-arrow-circle-down" ></i>
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
    <!-- ------------- end flex one -->
    
    
    
    
    <!-- ------------- start flex tow -->
    
                <div class="item-cart-flex2">
    
                        <div class="total-count">
                            <div class="count-price">
                                <h3>total items quantity = <b>${sumpriceOfQn}</b> <span>items</span></h3>
                                <h3>total price = <b>${totalpriceOfQn}</b><span>$</span></h3>
                                <h3>Tax 16% = <b><span>${((totalpriceOfQn/100)* 16)}</span> $</b></h3>
                                <h3>total price with Tax = <b>${Math.floor(((totalpriceOfQn/100)* 16)) +  totalpriceOfQn}</b><span>$</span></h3>
                            </div>
    
                          
    
                        </div>
    
                            <hr class="line">
                        
                            <div class="buy-items">
                            <i class="fab fa-apple-pay fa-2x"  ></i>
                            <i class="fab fa-google-pay fa-2x"  ></i>
                            <i class="fab fa-paypal fa-2x" ></i>
                            <button onClick="soOn()">buy</button>
                            </div>
                            
                        
                               
                </div>
    <!-- ------------- end flex tow -->
                    
                    
            </div>
    `
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



function soOn() {
    alert("we will created soon ,, more Love to arrived here and click on this Btn  .. thank u for testing this Ecommerce  ")
    
}


