let ProArr = JSON.parse(localStorage.getItem("DB_Items"));
console.log(ProArr);
let myItemseDom = document.querySelector(".favorites");
let myitems = ProArr.filter(item => item.isMe ==="Y")
let noContent = document.querySelector(".no-content");

function DrowMyItems() {
    let myProUI = myitems.map((item) => {
        item.isMe === "Y"
       
        return `<div class="no-content"></div>
    <div class="favorites">
       <div class="item-favorite">
           <div class="item-favorite-img">
               <img src="${item.imgUrl}" alt="img">
           </div>
           <div class="item-favorite-content">
              
                   <h2>${item.title}</h2>
                   <h3>${item.memory}</h3>
              
              <div class="clearIcon">
               <i onClick="delMyItem(${item.id})"  id="clearIcon" class="fa fa-trash" ></i>       
             </div>                        
           </div>
       </div>
        
   </div>`})
   myItemseDom.innerHTML = myProUI
}

DrowMyItems()

let delitem = document.getElementById("clearIcon");


function delMyItem (id) {
    let item = ProArr.find(item => item.id === id)
    console.log("aaaaa", item);
    let itmeInMyItem = myitems.filter(item => item.id !== id)
    console.log("apc" , itmeInMyItem);
    let del = ProArr.filter(item => item.id !== id)
    localStorage.setItem("DB_Items" , JSON.stringify(del)) 
    DrowMyItems(itmeInMyItem)
    alert("item was deleted")
}