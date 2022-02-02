let ProductsData = [
    {id:1 , quantity:1 , title:"samsung s 20" , color:'selver' , memory:'256 G' , address:'khartoum' , imgUrl:"../image/product/s20.jpg"},
    {id:2 , quantity:1 , title:"nokia 5G" , color:'gold' , memory:'128 G' , address:'khartoum' , imgUrl:"../image/product/mokiax50.jpg" },
    {id:3 , quantity:1 , title:"iphone 12 pro" , color:'green' , memory:'512 G' , address:'omdurman' , imgUrl:"../image/product/iphone12pro.jpg" },
    {id:4 , quantity:1 , title:"iphone 12" , color:'lightblue' , memory:'128 G' , address:'bahry' , imgUrl:"../image/product/iphone12.jpeg" },
    {id:5 , quantity:1 , title:"vivo x50" , color:'blue' , memory:'128 G' , address:'omdurman' , imgUrl:"../image/product/vivo-X50-Pro-2.jpg" },
    {id:6 , quantity:1 , title:"huawei mate 30" , color:'green' , memory:'256 G' , address:'khartoum' , imgUrl:"../image/product/mate30.jpg" },
    {id:7 , quantity:1 , title:"samsung s 21" , color:'selver' , memory:'128 G' , address:'' , imgUrl:"../image/product/galaxy-s21.png" },
    // {id: , title:"" , color:'' , memory:' G' , address:'' , imgUrl:"../image/product/.jpg" },

]

localStorage.setItem("DB_Items", JSON.stringify(ProductsData));