let logged = document.getElementById("userLogged")
let unlogged = document.getElementById("userUnlogged")


if (localStorage.getItem("username")) {
    
        unlogged.remove() ;
        logged.style.display = 'block';
        
    }
