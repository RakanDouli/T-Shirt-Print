import * as AppHome from './app.js';


  

function showbasket(){ 
 
  let Selected_Items=document.querySelector('.list-selected');
  if(Selected_Items!==null){
  let listData=''


    JSON.parse(localStorage.getItem("basket_items")).map((data) => {
      listData += `<div class="basket-elements">
                      <div class="basket-img">
                        <img src="${data.photo}">
                    
                      </div>
                      <div class="amount">
                        <button class="quantity-plus">+</button> 
                        <span class="item-quantitiy"> ${data.no}</span>   
                        <button class="quantity-minus">-</button>    
                      </div>
                      <div class="basket-info">
              
                          <div class="name"> ${data.title}</div>
                          <div class="item-id"> ${data.Id}</div>
                          <div class="size"> ${data.size}</div>
                          <div class="color"> ${data.color}</div>
                          <div class="type"> ${data.type}</div>
                      </div>
                      <div class="basket-price"> ${data.price}</div>
                  
                      <button id="basket-list-BN" class="basket-delete"><i class="fas fa-trash"></i></button>
              </div> 
              `;
    });
  Selected_Items.innerHTML = listData;
        
  }

  ///////////////////////////////////////// delete items
  let itemDelete = document.querySelectorAll(".basket-delete");

  for (let i = 0; i < itemDelete.length; i++) {
  

    itemDelete[i].addEventListener("click", Delete);
    function Delete(e) {
      let basket_items = [];


    JSON.parse(localStorage.getItem("basket_items")).filter((data) => {
      if (data.Id != e.target.parentElement.parentElement.children[2].children[1].innerText) {
        console.log(true)
        basket_items.push(data);
      }
    });
    localStorage.setItem("basket_items", JSON.stringify(basket_items));
    window.location.reload();
  }
  }



  ///////////////////// plus + basket tiem - minus////////////////

  let plus=document.querySelectorAll('.quantity-plus');
  for(let i=0;i<plus.length;i++){
    plus[i].addEventListener('click',(e)=>{
      let basket_items = [];
 
      
      JSON.parse(localStorage.getItem("basket_items")).filter((data) => {
        
       if(e.target.parentElement.parentElement.children[2].children[1].innerText == data.Id){
        data.no+=+1;
      
        
      
       }
       basket_items.push(data);
      });
      localStorage.setItem("basket_items", JSON.stringify(basket_items));
      window.location.reload();

    })
  }
  
  //////minus
  let minus=document.querySelectorAll('.quantity-minus');
  for(let i=0;i<minus.length;i++){
    minus[i].addEventListener('click',(e)=>{
      let basket_items = [];
 
      
      JSON.parse(localStorage.getItem("basket_items")).filter((data) => {
        
        if(e.target.parentElement.parentElement.children[2].children[1].innerText == data.Id ){
          if(data.no>1){data.no+=-1}else{return}
         
        }
        basket_items.push(data);
      
        
       

      });
      localStorage.setItem("basket_items", JSON.stringify(basket_items));
      window.location.reload();

    })
  }
}showbasket();



let totalPriceOutput=document.querySelector('.total-price');
totalPriceOutput.innerHTML=0

let total=[]
JSON.parse(localStorage.getItem("basket_items")).forEach((data) => {
  
let totalEach=data.no*data.price;
total.push(totalEach);
let alltotal=total.reduce((a, b) => a + b, 0);

totalPriceOutput.innerText=alltotal

});    




