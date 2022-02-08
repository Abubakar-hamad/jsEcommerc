let editproductTitle = document.getElementById("update-title");
let editproductColor = document.getElementById("update-color");
let editproductMemory = document.getElementById("update-memory");
let editproductPrice = document.getElementById("update-price");
let alertPrgr = document.querySelector(".alert")
let updateBtn = document.querySelector(".update-item")
let ProArr = localStorage.getItem("DB_Items") ? JSON.parse(localStorage.getItem("DB_Items")) : [];
let itemInDB =JSON.parse(localStorage.getItem("EditItem"))
   
    editproductTitle.value  = itemInDB.title 
    editproductColor.value  = itemInDB.color
    editproductMemory.value = itemInDB.memory
    editproductPrice.value  = itemInDB.price

// console.log(itemInDB);

updateBtn.addEventListener("submit" , publishUpdatedItem )

function publishUpdatedItem(e) {
    e.preventDefault()
    let id = itemInDB.id;
    console.log(id);
    item = ProArr.find((items) => items.id === id)
    console.log(item);
    item.title = editproductTitle.value
    item.color = editproductColor.value
    item.memory = editproductMemory.value
    item.price = editproductPrice.value
    localStorage.setItem("DB_Items" , JSON.stringify(ProArr))
    

    editproductTitle.value = "" ; 
    editproductMemory.value = "" ; 
    editproductPrice.value = "" ; 
    editproductColor.value = ""; 
    
    alertPrgr.style.display = "block"; 
    alertPrgr.innerHTML = "item was successfullu Update .."
    setTimeout(() => {
        window.location = "products.html"

    },3000)
}


