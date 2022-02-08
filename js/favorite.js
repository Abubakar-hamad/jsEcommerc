
let favArr = favArray = localStorage.getItem("favorite") ? JSON.parse(localStorage.getItem("favorite")) : [];


console.log(favArr);

let favoriteDom = document.querySelector(".favorites");
let noContent = document.querySelector(".no-content");


function DrowFavorite() {
    FavoriteUI = favArr.map((item) => {
        return ` <div class="no-content"></div>
        <div class="favorites">
        <div class="item-favorite">
        <div class="item-favorite-img">
            <img src="${item.imgUrl}" alt="img">
        </div>
        <div class="item-favorite-content">
            <div class="titlememory">
                <h2>${item.title}</h2>
                <h3><b>Memory : </b>${item.memory}</h3>
            </div>
            <div class="clearIcon">
            <i onClick=deleteItemFav(${item.id}) class="fa fa-trash" ></i>       
            </div>      
        </div>
        </div>
        </div>
    </div>`
    })

    favoriteDom.innerHTML = FavoriteUI.join("");
    
}

DrowFavorite();


function deleteItemFav(id) {
    console.log(id);
    let item = favArr.find((items) => items.id === id)
    // let itemdel = favArr.filter((items) => items.id !== item.id)
    console.log(item);
    let itemLocation = favArr.indexOf(item)
    console.log(itemLocation);
    favArr.splice(itemLocation , 1)
    // console.log(favArr);

    localStorage.setItem("favorite", JSON.stringify(favArr))
    if (favArr == "" ) {
        localStorage.removeItem("favorite")
        noContent.style.display = "block";
        noContent.innerHTML = "All Items Deleted ..No Items "
        
    }
    DrowFavorite(favArr);
    
}



if (favArr == "" ) {
    localStorage.removeItem("favorite")
    noContent.style.display = "block";
    noContent.innerHTML = "No Items ..."
    
}
