function showbasket(){ 
    const basket_list = document.querySelector(".basket-list");

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
    basket_list.innerHTML = listData;
          


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
          data.no= data.no +1;
          basket_items.push(data);
        
        });
        localStorage.setItem("basket_items", JSON.stringify(basket_items));
        window.location.reload();

      })

    }
    //////minus
    let minus=document.querySelector('.quantity-minus');
    for(let i=0;i<plus.length;i++){
      minus.addEventListener('click',()=>{
        let basket_items = [];
        JSON.parse(localStorage.getItem("basket_items")).filter((data) => {
        let q=document.querySelector('.item-quantitiy');                
        });
        localStorage.setItem("basket_items", JSON.stringify(basket_items));
        window.location.reload();

      })

    }
}showbasket();