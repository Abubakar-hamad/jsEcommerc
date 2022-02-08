let cartAr = localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")) : [];

Producs = localStorage.getItem("DB_Items") ? JSON.parse(localStorage.getItem("DB_Items")) : [];
let ProductID = JSON.parse(localStorage.getItem("Details"));

// localStorage.setItem("LastItemShow" , JSON.stringify(item))

function DrowItemDetails() {
    let item = Producs.find((item) => item.id == ProductID)
    let ProductDetailDom = document.getElementById("alkory")
    ProductDetailDom.innerHTML =`<div id="alkory" class="item-details">
    <div class="item-details-img">
        <img src="${item.imgUrl}" alt="img">
    </div>
    <div class="item-details-content">
        <h1>${item.title}</h1>
        <hr>
        <h3><b>color : </b>${item.color}</h3>
        <h3><b>price : </b>${item.price}</h3>
        <br>
        <hr>
        <br>
        <p> <b>Description : <br></b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, nihil. Necessitatibus, assumenda nisi? Illum rerum quasi provident vel laudantium nesciunt a perferendis atque, quae dolorum aperiam unde praesentium repudiandae autem.</p>
    </div>
</div>`
}

DrowItemDetails();