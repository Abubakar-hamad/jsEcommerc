<div class="carts">
            
        <div class="cart-item">
                <div class="cart-img">
                    ${i} 
                    <img src="${item.imgUrl}" alt="image-item">
                </div>

                <div class="cart-content">
                    <div class="cart-det">
                        <b>${item.title}</b>
                        <p>color:<b>${item.color}</b></p>
                        <p>price:<b>${item.price}</b></p>
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
        `

        <!-- <div class="calc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio architecto, repudiandae suscipit et consequatur eligendi rerum labore dicta inventore itaque.
</div> -->
<!-- <div class="cart-item">
        <div class="cart-img">
            ${i} 
            <img src="${item.imgUrl}" alt="image-item">
        </div>

        <div class="cart-content">
            <div class="cart-det">
                <b>${item.title}</b>
                <p>color:<b>${item.color}</b></p>
                <p>price:<b>${item.price}</b></p>
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
</div> -->