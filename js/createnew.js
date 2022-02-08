let productTitle = document.getElementById("item-title");
let productColor = document.getElementById("item-color");
let productMemory = document.getElementById("item-memory");
let productPrice = document.getElementById("item-price");
let alertPrgr = document.querySelector(".alert")
let createBtn = document.querySelector(".new-item")




productMemory.addEventListener("change", getMemoryValue);

createBtn.addEventListener("submit", publishItem)



function getMemoryValue(e) {
    itemsize = e.target.value
    console.log(itemsize);
}

function publishItem(e) {
    let ArrProducts = JSON.parse(localStorage.getItem("DB_Items"))
    e.preventDefault()
    console.log(ArrProducts);
    let itemtitle = productTitle.value
    let itemcolor = productColor.value
    let itemprice = productPrice.value
    if (itemtitle && itemprice  ) {
        let item = {
            id: ArrProducts.length + 1 || 1,
            quantity: 1,
            title: itemtitle, 
            color: itemcolor,
            imgUrl: "./image/product/no_image.png", 
            memory: itemsize,
            price: itemprice,
            isMe :"Y"
        }
        let newitems = [...ArrProducts, item]
        localStorage.setItem("DB_Items", JSON.stringify(newitems))
        
        alertPrgr.style.display = "block";
        alertPrgr.style.backgroundColor = "#1a6985";
        alertPrgr.style.color = "white";
        alertPrgr.innerHTML = "waiting until sending Data .. ^.^ ";
        setTimeout(() => {
            alertPrgr.style.display = "none";
            
        }, 3000)
        
        setTimeout(() => {
            alertPrgr.style.display = "block";
            alertPrgr.style.backgroundColor = "lightgreen";
            alertPrgr.style.color = "black";
            alertPrgr.innerHTML= "Item has been created succefully .."
            productTitle.value = "";
            productColor.value = "";
            productPrice.value = "";
            productMemory.value = "";
            
            
        }, 5000)
        
    } else {
        alertPrgr.style.display = "block";
        alertPrgr.style.backgroundColor = "red";
       
        alertPrgr.innerHTML = "filds Empty !!!";
        setTimeout(() => {
        alertPrgr.style.display = "none";
            
        },3000)
    }
    
}