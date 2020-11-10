import { list_items } from "./js/data.js";
import * as canvas from './canvas.js';









// menu-btn
function mBtn(){
  let menuBtn=document.querySelector('.menu-showhide');

menuBtn.addEventListener("click", hide);
function hide() {
  var clicked = document.querySelector(".menu-links");
  
  if (clicked.style.display === "none") {
    clicked.style.display = "flex";
  } else {
    clicked.style.display = "none";
  }
}
}mBtn();





// input filter

const list = document.querySelector(".list");
const sort_name_btnA = document.querySelector(".sort-name-asce");
const sort_price_btn = document.querySelector(".sort-price");
let inputElement = document.querySelector(".input-filter");
if(inputElement === null ){

}else{
  inputElement.addEventListener("keyup", search);
  function search() {
    let inputText = inputElement.value.toLowerCase();
    console.log(inputText);
    let title = document.getElementsByClassName("item-title");
    for (let i = 0; i < title.length; i++) {
      if (title[i].innerText.toLowerCase().includes(inputText)) {
        title[i].parentElement.parentElement.style.display = "flex";
      } else {
        let list_it = document.querySelectorAll(".list-item");
        title[i].parentElement.parentElement.style.display = "none";
      }
    }
  }
}


//////////////////////////////// Asc Desc filters *price-btn *A-Z

let desc = false;
if(sort_name_btnA !== null || sort_price_btn !== null ){
  sort_name_btnA.addEventListener("click", () => {
    let array = sort_array_by(list_items, "name", desc);
    displayList(array);
    desc = !desc;
  });
  
  sort_price_btn.addEventListener("click", () => {
    let array = sort_array_by(list_items, "Price", desc);
    displayList(array);
    desc = !desc;
  });
  
  function sort_array_by(array, sort, desc) {
    array.sort(function (a, b) {
      if (a[sort] < b[sort]) return 1;
      if (a[sort] > b[sort]) return -1;
      return 0;
    });
    if (desc) array.reverse();
    return array;
  }
}


///////////////////////////////////////////////////////// display the items {{{{{{LIST CARDS}}}}}}

function displayList(array = []) {
          if(list!== null){
            list.innerHTML = '';
            for (let i = 0; i < array.length; i++) {
              let item = array[i];
  
              var item_element = document.createElement("div");
              item_element.classList.add("list-item");
              // is a node
              item_element.innerHTML = getItemProduct(item);
  
              list.appendChild(item_element);
            }
          }
          


//back ground color onclick change
  let img_bg = document.querySelectorAll(".item-image-bg");

  img_bg.forEach((img) => {
    img.addEventListener("click", (e) => {
      let bg_color = [
        "rgb(249, 249, 249),rgb(249, 249, 238)",
        "rgb(164, 163, 163), rgb(222, 222, 222)",
        "rgb(31, 31, 31), rgb(57, 57, 57)",
        "rgb(87,46,109),rgb(185, 125, 218)",
        "rgb(8, 18, 60),  rgb(41, 50, 91)",
        "rgb(189,211,224),rgb(226, 242, 250)",
        "rgb(249,224,229),rgb(254, 247, 248)",
        "rgb(209,51,118),rgb(255, 175, 209)",
        "rgb(180,40,40),rgb(248, 127, 127)",
        " rgb(240, 142, 50),rgb(254, 196, 142)",
        " rgb(250,211,103),rgb(228, 209, 157)"
      ];
      for (let i = 0; i < bg_color.length; i++) {
        img.style.background = `linear-gradient(135deg, ${
          bg_color[Math.floor(Math.random() * bg_color.length)]
        }`;
      }
    });
  });
  
}

displayList(list_items);






// >{{{{{{{{{{{{{{    list Card item     }}}}}}}}}}}}}}
function getItemProduct(item) {
  return ` 
    <div class="product-card">
         <div class="item-image-bg"><img class="item-img" src="${item.img}" alt=""></div>
            <div class="item-title">${item.name}</div>
            <div class="item-designer">${item.designer}</div>
            <div class="item-tags">${item.tags}</div>
            <div class="price-order">
                <div class="item-price">${item.Price}</div>
                <button class="item-order-btn" data-itemid="${item.Id}"> Order Now </button>
            </div>  
        </div>

    </div>

`;
}

//{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{      Order-NOW BTN Display        }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
let btn = document.querySelectorAll(".item-order-btn");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", displayProduct);
}

function displayProduct(e) {
  const item = list_items.find((obj) => obj.Id === +e.target.dataset.itemid);
  e.preventDefault()
  const modalElement = document.getElementById("modal");

  modalElement.innerHTML = `
               <div class="product-display">
            
               <div class="product-photo">
                   <div class="product-photo-bg">
                                       <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="785" height="810" viewBox="0 0 785 810">
                                           <defs>
                                           <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                               <stop offset="0" stop-color="#070707" stop-opacity="0.098"/>
                                               <stop offset="1" stop-color="#a09c9c" stop-opacity="0"/>
                                           </linearGradient>
                                           <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                                               <stop offset="0" stop-color="#070707" stop-opacity="0.098"/>
                                               <stop offset="0.158" stop-color="#1f1e1e" stop-opacity="0.09"/>
                                               <stop offset="1" stop-color="#a7a7a7" stop-opacity="0"/>
                                               <stop offset="1" stop-color="#a09c9c" stop-opacity="0.098"/>
                                           </linearGradient>
                                           <clipPath id="clip-Web_1920_1">
                                               <rect width="785" height="810"/>
                                           </clipPath>
                                           </defs>
                                           <g id="Web_1920_1" data-name="Web 1920 – 1" clip-path="url(#clip-Web_1920_1)">
                                           <path id="Path_1" data-name="Path 1" d="M825.744,175c-69.781,30.495-138.489,1.558-138.489,1.558s-3.905,1.729-11.026,4.859c-22.629,12.728-85.893,37.592-143.455,61.42-45.132,68.618-89.59,181.245-89.59,181.245s52.48,41.922,102.96,42.63c9.686-32.867,19.354-33.558,21.24-33.913s17.393,17.982,19.316,42.78,0,37,0,37l4.581,22.907L586.7,556.356v25.019s-20.625,142.073-24.847,176.276c12.754,30.393,290.742,58.26,390.864,3.688-17.242-106.789-22.134-153.754-22.134-153.754l-4.252-26.21,3.281-24.7s-3.281-.9-3.281-21.1.131-37.77,3.281-62.68,11.042-32.568,11.042-32.568,6.778-15.17,15.383,0S968,466.713,968,466.713s50.044-1.711,102.8-42.63c-28.427-50-26.544-66.14-26.544-66.14l-42.885-87.42-25.75-32S870.766,198.184,838,179.991C831.82,176.933,826.356,176.254,825.744,175Z" transform="translate(-360 -90)" fill="none" stroke="rgba(112,112,112,0.25)" stroke-width="1"/>
                                           <path id="Path_2" data-name="Path 2" d="M825.268,176.261c-4.421,12.248-27.336,48.174-71.749,48.656S689.257,184,687.752,176.261C759.132,206.447,825.268,176.261,825.268,176.261Z" transform="translate(-360 -90)" fill="rgba(195,191,191,0.29)" stroke="rgba(112,112,112,0.1)" stroke-width="1"/>
                                           <path id="Path_5" data-name="Path 5" d="M562.3,408.426c1.885-23.631,3.611-91.2,7.7-95.027s-16.865,51.572-12.909,97.282" transform="translate(28.339 -65.243)" fill="rgba(0,0,0,0.11)"/>
                                           <path id="Path_6" data-name="Path 6" d="M678.931,180.631c24.126,57.653,74.333,54.926,74.333,54.926s51.724,5.358,84.326-54.926" transform="translate(-360 -90)" fill="none" stroke="rgba(112,112,112,0.27)" stroke-width="1"/>
                                           <path id="Path_7" data-name="Path 7" d="M565.776,420.655c-2.1-26.667-4.025-102.911-8.587-107.233s18.8,58.2,14.388,109.778" transform="translate(-360.939 -77.762)" fill="rgba(0,0,0,0.1)"/>
                                           <path id="Path_8" data-name="Path 8" d="M582.521,468.4s38.672-53.76,37.021-66.062c-3.475,5.336-41.1,56.8-41.1,56.8Z" transform="translate(-360 -103.429)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                                           <path id="Path_9" data-name="Path 9" d="M582.521,468.4s34.266-48.211,32.614-60.513c-3.475,5.336-32.614,45.831-32.614,45.831Z" transform="translate(-356 -72.429)" fill="rgba(7,7,7,0.07)" opacity="0.561"/>
                                           <path id="Path_10" data-name="Path 10" d="M582.521,468.4s38.672-53.76,37.021-66.062c-3.475,5.336-37.021,45.233-37.021,45.233Z" transform="translate(-352 -20.429)" fill="rgba(7,7,7,0.08)" opacity="0.561"/>
                                           <path id="Path_11" data-name="Path 11" d="M582.521,468.4s34.266-48.211,32.614-60.513c-3.475,5.336-32.614,34.374-32.614,34.374Z" transform="translate(-356 22.571)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                                           <path id="Path_12" data-name="Path 12" d="M615.51,468.4s-38.672-53.76-37.021-66.062c3.475,5.336,41.1,56.8,41.1,56.8Z" transform="translate(-42.154 -105.429)" fill="rgba(7,7,7,0.06)" opacity="0.561"/>
                                           <path id="Path_13" data-name="Path 13" d="M611.459,468.4s-30.349-48.211-28.887-60.513c3.078,5.336,28.887,45.831,28.887,45.831Z" transform="translate(-42.103 -74.429)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                                           <path id="Path_14" data-name="Path 14" d="M619.592,468.4s-38.672-53.76-37.021-66.062c3.475,5.336,37.021,45.233,37.021,45.233Z" transform="translate(-52.502 -20.429)" fill="rgba(7,7,7,0.08)" opacity="0.561"/>
                                           <path id="Path_15" data-name="Path 15" d="M611.459,468.4s-30.349-48.211-28.887-60.513c3.078,5.336,28.887,34.374,28.887,34.374Z" transform="translate(-42.103 22.571)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                                           <path id="Path_16" data-name="Path 16" d="M547.345,520.533s102.872-121.626,100.669-135.4c-4.638,5.976-103.652,96.562-103.652,96.562Z" transform="translate(1337.73 473.04) rotate(159)" opacity="0.561" fill="url(#linear-gradient)"/>
                                           <path id="Path_17" data-name="Path 17" d="M573.789,496.958s76.427-98.051,74.224-111.826c-4.638,5.976-85.006,84.093-85.006,84.093Z" transform="matrix(-0.998, 0.07, -0.07, -0.998, 1272.27, 692.3)" opacity="0.561" fill="url(#linear-gradient)"/>
                                           <path id="Path_18" data-name="Path 18" d="M627.616,530.481s-74.745-128.048-72.9-145.349c3.889,7.505,84.076,117.06,84.076,117.06Z" transform="translate(699.091 803.862) rotate(-172)" opacity="0.561" fill="url(#linear-gradient)"/>
                                           <path id="Path_19" data-name="Path 19" d="M614.743,504.883s-61.731-105.976-60.028-119.751c3.584,5.976,75.1,95.957,75.1,95.957Z" transform="matrix(-0.998, 0.07, -0.07, -0.998, 778.097, 693.816)" opacity="0.561" fill="url(#linear-gradient-4)"/>
                                           <path id="Path_20" data-name="Path 20" d="M563.136,751.135c56.73,28.852,175.072,31.145,175.072,31.145s134.451,8.982,213.133-31.145" transform="translate(-360 -90)" fill="none" stroke="rgba(112,112,112,0.27)" stroke-width="1"/>
                                           </g>
                                       </svg>
                 
                       <img class="product-img" src="${item.img}" alt="">
                   </div>
               </div>
               <div class="product-info">
               <button class="close-btn"> x</button>
                   <ul class="product-list"> 
                       <li class="product-name"> ${item.name}</li>
                       <div class="product-desginer">Designer: ${item.designer}</div>
                       
                       <div class="product-details">
                       <h4>Product Details:
                       <p>${item.info}</p>
                       </div>
                       <p  id="ID">${item.Id}</p>
                       <li class="size-options">Select size:<br>
                           <select required id="size-value" value="size" name="select" >
                           <option disabled selected value> - select an option - </option>
                           <option value="S">Small</option>
                           <option value="M">Medium</option>
                           <option value="L">Large</option>
                           <option value="XL">XL</option>
                           </select>
                       </li>
           
                       <li class="color-options">Select color<br> 
                           <select required id="color-value"  value="color" name="select" >
                           <option disabled selected value> - select an option - </option>
                           <option value="White">White</option>
                            <option value="Grey">Grey</option>
                            <option value="Black">Black</option>
                            <option value="Purple">Purple</option>
                            <option value="Darkblue">Darkblue</option>
                            <option value="Lightblue">Lightblue</option>
                            <option value="Lightpink">Lightpink</option>
                            <option value="Pink">Pink</option>
                            <option value="Red">Red</option>
                            <option value="Orange">Orange</option>
                            <option value="Yellow">Yellow</option>
                           </select>
                           <div class="result"></div>
                       </li>
                       <li class="type-options">Select T-shirt type<br> 
                           <select required id="type-value"  value="type" name="select" >
                           <option disabled selected value> - select an option - </option>
                           <option value="Short-sleeves">Short Sleeves</option>
                           <option value="Hoodies">Hoodies</option>
                           <option value="Long-sleeves">Long sleeves</option>
                           <option value="Raglan-sleeves">Raglan Sleeves</option>
                           </select>
                       </li>
                      
                   </ul>
                   <div class="product-info-btns">
                   <button data-basketid="${item.Id}" class="btn1"><span>+</span> <i class="gg-shopping-cart"></i></button>
                   <button class="btn2" onclick="location.href =( '/buynow.html')">Buy Now</button>
                   <div class="product-price">${item.Price}</div>
                   </div>
                   
                   `;


                  /////////thirt-type
                  let shirtType=document.querySelector('#type-value');
                let shirtColorSelect= document.querySelector('#color-value');
                  if(shirtType !== null){
                   shirtType.addEventListener('change', () => {
                     
                   let shirtSVG=document.querySelector('.product-photo-bg svg');
                   if( shirtType.value == "Short-sleeves"){
                     shirtSVG.innerHTML=`<defs>
                     <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                         <stop offset="0" stop-color="#070707" stop-opacity="0.098"/>
                         <stop offset="1" stop-color="#a09c9c" stop-opacity="0"/>
                     </linearGradient>
                     <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                         <stop offset="0" stop-color="#070707" stop-opacity="0.098"/>
                         <stop offset="0.158" stop-color="#1f1e1e" stop-opacity="0.09"/>
                         <stop offset="1" stop-color="#a7a7a7" stop-opacity="0"/>
                         <stop offset="1" stop-color="#a09c9c" stop-opacity="0.098"/>
                     </linearGradient>
                     <clipPath id="clip-Web_1920_1">
                         <rect width="785" height="810"/>
                     </clipPath>
                     </defs>
                     <g id="Web_1920_1" data-name="Web 1920 – 1" clip-path="url(#clip-Web_1920_1)">
                     <path id="Path_1" data-name="Path 1" d="M825.744,175c-69.781,30.495-138.489,1.558-138.489,1.558s-3.905,1.729-11.026,4.859c-22.629,12.728-85.893,37.592-143.455,61.42-45.132,68.618-89.59,181.245-89.59,181.245s52.48,41.922,102.96,42.63c9.686-32.867,19.354-33.558,21.24-33.913s17.393,17.982,19.316,42.78,0,37,0,37l4.581,22.907L586.7,556.356v25.019s-20.625,142.073-24.847,176.276c12.754,30.393,290.742,58.26,390.864,3.688-17.242-106.789-22.134-153.754-22.134-153.754l-4.252-26.21,3.281-24.7s-3.281-.9-3.281-21.1.131-37.77,3.281-62.68,11.042-32.568,11.042-32.568,6.778-15.17,15.383,0S968,466.713,968,466.713s50.044-1.711,102.8-42.63c-28.427-50-26.544-66.14-26.544-66.14l-42.885-87.42-25.75-32S870.766,198.184,838,179.991C831.82,176.933,826.356,176.254,825.744,175Z" transform="translate(-360 -90)" fill="none" stroke="rgba(112,112,112,0.25)" stroke-width="1"/>
                     <path id="Path_2" data-name="Path 2" d="M825.268,176.261c-4.421,12.248-27.336,48.174-71.749,48.656S689.257,184,687.752,176.261C759.132,206.447,825.268,176.261,825.268,176.261Z" transform="translate(-360 -90)" fill="rgba(195,191,191,0.29)" stroke="rgba(112,112,112,0.1)" stroke-width="1"/>
                     <path id="Path_5" data-name="Path 5" d="M562.3,408.426c1.885-23.631,3.611-91.2,7.7-95.027s-16.865,51.572-12.909,97.282" transform="translate(28.339 -65.243)" fill="rgba(0,0,0,0.11)"/>
                     <path id="Path_6" data-name="Path 6" d="M678.931,180.631c24.126,57.653,74.333,54.926,74.333,54.926s51.724,5.358,84.326-54.926" transform="translate(-360 -90)" fill="none" stroke="rgba(112,112,112,0.27)" stroke-width="1"/>
                     <path id="Path_7" data-name="Path 7" d="M565.776,420.655c-2.1-26.667-4.025-102.911-8.587-107.233s18.8,58.2,14.388,109.778" transform="translate(-360.939 -77.762)" fill="rgba(0,0,0,0.1)"/>
                     <path id="Path_8" data-name="Path 8" d="M582.521,468.4s38.672-53.76,37.021-66.062c-3.475,5.336-41.1,56.8-41.1,56.8Z" transform="translate(-360 -103.429)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                     <path id="Path_9" data-name="Path 9" d="M582.521,468.4s34.266-48.211,32.614-60.513c-3.475,5.336-32.614,45.831-32.614,45.831Z" transform="translate(-356 -72.429)" fill="rgba(7,7,7,0.07)" opacity="0.561"/>
                     <path id="Path_10" data-name="Path 10" d="M582.521,468.4s38.672-53.76,37.021-66.062c-3.475,5.336-37.021,45.233-37.021,45.233Z" transform="translate(-352 -20.429)" fill="rgba(7,7,7,0.08)" opacity="0.561"/>
                     <path id="Path_11" data-name="Path 11" d="M582.521,468.4s34.266-48.211,32.614-60.513c-3.475,5.336-32.614,34.374-32.614,34.374Z" transform="translate(-356 22.571)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                     <path id="Path_12" data-name="Path 12" d="M615.51,468.4s-38.672-53.76-37.021-66.062c3.475,5.336,41.1,56.8,41.1,56.8Z" transform="translate(-42.154 -105.429)" fill="rgba(7,7,7,0.06)" opacity="0.561"/>
                     <path id="Path_13" data-name="Path 13" d="M611.459,468.4s-30.349-48.211-28.887-60.513c3.078,5.336,28.887,45.831,28.887,45.831Z" transform="translate(-42.103 -74.429)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                     <path id="Path_14" data-name="Path 14" d="M619.592,468.4s-38.672-53.76-37.021-66.062c3.475,5.336,37.021,45.233,37.021,45.233Z" transform="translate(-52.502 -20.429)" fill="rgba(7,7,7,0.08)" opacity="0.561"/>
                     <path id="Path_15" data-name="Path 15" d="M611.459,468.4s-30.349-48.211-28.887-60.513c3.078,5.336,28.887,34.374,28.887,34.374Z" transform="translate(-42.103 22.571)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                     <path id="Path_16" data-name="Path 16" d="M547.345,520.533s102.872-121.626,100.669-135.4c-4.638,5.976-103.652,96.562-103.652,96.562Z" transform="translate(1337.73 473.04) rotate(159)" opacity="0.561" fill="url(#linear-gradient)"/>
                     <path id="Path_17" data-name="Path 17" d="M573.789,496.958s76.427-98.051,74.224-111.826c-4.638,5.976-85.006,84.093-85.006,84.093Z" transform="matrix(-0.998, 0.07, -0.07, -0.998, 1272.27, 692.3)" opacity="0.561" fill="url(#linear-gradient)"/>
                     <path id="Path_18" data-name="Path 18" d="M627.616,530.481s-74.745-128.048-72.9-145.349c3.889,7.505,84.076,117.06,84.076,117.06Z" transform="translate(699.091 803.862) rotate(-172)" opacity="0.561" fill="url(#linear-gradient)"/>
                     <path id="Path_19" data-name="Path 19" d="M614.743,504.883s-61.731-105.976-60.028-119.751c3.584,5.976,75.1,95.957,75.1,95.957Z" transform="matrix(-0.998, 0.07, -0.07, -0.998, 778.097, 693.816)" opacity="0.561" fill="url(#linear-gradient-4)"/>
                     <path id="Path_20" data-name="Path 20" d="M563.136,751.135c56.73,28.852,175.072,31.145,175.072,31.145s134.451,8.982,213.133-31.145" transform="translate(-360 -90)" fill="none" stroke="rgba(112,112,112,0.27)" stroke-width="1"/>
                     </g>`;
                     colorSelect()
                   }
                   
                   else if( shirtType.value = "Long-sleeves"){
                    
                     shirtSVG.innerHTML=`<defs>
                     <clipPath id="clip-path">
                       <rect id="Rectangle_1" data-name="Rectangle 1" width="785" height="810"/>
                     </clipPath>
                     <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                       <stop offset="0" stop-color="#070707" stop-opacity="0.098"/>
                       <stop offset="1" stop-color="#a09c9c" stop-opacity="0"/>
                     </linearGradient>
                     <linearGradient id="linear-gradient-4" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                       <stop offset="0" stop-color="#070707" stop-opacity="0.098"/>
                       <stop offset="0.158" stop-color="#1f1e1e" stop-opacity="0.09"/>
                       <stop offset="1" stop-color="#a7a7a7" stop-opacity="0"/>
                       <stop offset="1" stop-color="#a09c9c" stop-opacity="0.098"/>
                     </linearGradient>
                   </defs>
                   <g id="Web_1920_1" data-name="Web 1920 – 1" clip-path="url(#clip-path)">
                     <path id="Path_1" data-name="Path 1" d="M687.255,176.558s-3.905,1.729-11.026,4.859c-22.629,12.728-85.893,37.592-143.455,61.42-45.132,68.618-107.909,223.876-107.909,223.876s11.086,242.144,20.488,251.913c9.046,9.4,68.424-4.7,80.89-3.633,3.64-61.854-8.216-192-7.006-191.979,9.686-32.867,54.941-88.918,56.827-89.273s-13.172,77.97-8.68,98.5v50.069l11.841,165.359s.616,18.48,0,23.473c12.754,30.393,249.051,54.572,349.173,0,.06-.662-.4-20.667,0-25.371,18.663-64.125,18.061-109.865,18.061-109.865V500.53l-5.805-60.2s6.778-15.17,15.383,0S968,466.713,968,466.713s18.462,38.827,23.678,56.3c6.025-1.3-19.614,139.118-20.081,177.191,24.752,3.606,42.605,5.893,67.347,11.313,2.727-2.568,38.4-203.209,41.087-206.955,3.774-5.253-35.774-146.62-35.774-146.62l-42.885-87.42-25.75-32S870.766,198.184,838,179.991C831.82,176.933,687.255,176.558,687.255,176.558Z" transform="translate(-360 -90)" fill="${shirtColorSelect.value}" stroke="rgba(112,112,112,0.25)" stroke-width="1"/>
                     <path id="Path_2" data-name="Path 2" d="M829.688,176.261c-5.067,9.761-28.215,41.912-74.055,42.331s-66.327-35.6-67.881-42.331C735.378,177.819,829.688,176.261,829.688,176.261Z" transform="matrix(1, 0.017, -0.017, 1, -356.439, -96.886)" fill="rgba(195,191,191,0.29)" stroke="rgba(112,112,112,0.1)" stroke-width="1"/>
                     <path id="Path_5" data-name="Path 5" d="M562.3,408.426c1.885-23.631,3.611-91.2,7.7-95.027s-16.865,51.572-12.909,97.282" transform="translate(28.339 -65.243)" fill="rgba(0,0,0,0.11)"/>
                     <path id="Path_6" data-name="Path 6" d="M678.931,180.631c24.126,57.653,74.333,54.926,74.333,54.926s51.724,5.358,84.326-54.926" transform="translate(-359 -91)" fill="rgba(0,0,0,0)" stroke="rgba(112,112,112,0.27)" stroke-width="1"/>
                     <path id="Path_7" data-name="Path 7" d="M565.776,420.655c-2.1-26.667-4.025-102.911-8.587-107.233s18.8,58.2,14.388,109.778" transform="translate(-353.939 -77.762)" fill="rgba(0,0,0,0.1)"/>
                     <path id="Path_12" data-name="Path 12" d="M615.51,468.4s-38.672-53.76-37.021-66.062c3.475,5.336,41.1,56.8,41.1,56.8Z" transform="translate(-35.154 -111.429)" fill="rgba(7,7,7,0.06)" opacity="0.561"/>
                     <path id="Path_13" data-name="Path 13" d="M611.459,468.4s-30.349-48.211-28.887-60.513c3.078,5.336,28.887,45.831,28.887,45.831Z" transform="translate(-26.103 -69.429)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                     <path id="Path_14" data-name="Path 14" d="M619.592,468.4s-38.672-53.76-37.021-66.062c3.475,5.336,37.021,45.233,37.021,45.233Z" transform="translate(-34.502 22.571)" fill="rgba(7,7,7,0.08)" opacity="0.561"/>
                     <path id="Path_15" data-name="Path 15" d="M611.459,468.4s-30.349-48.211-28.887-60.513c3.078,5.336,28.887,34.374,28.887,34.374Z" transform="translate(-26.103 83.571)" fill="rgba(7,7,7,0.1)" opacity="0.561"/>
                     <path id="Path_16" data-name="Path 16" d="M547.345,520.533s102.872-121.626,100.669-135.4c-4.638,5.976-103.652,96.562-103.652,96.562Z" transform="matrix(-0.934, 0.358, -0.358, -0.934, 1337.73, 473.04)" opacity="0.561" fill="url(#linear-gradient)"/>
                     <path id="Path_17" data-name="Path 17" d="M573.789,496.958s76.427-98.051,74.224-111.826c-4.638,5.976-85.006,84.093-85.006,84.093Z" transform="translate(1272.27 692.3) rotate(175.988)" opacity="0.561" fill="url(#linear-gradient)"/>
                     <path id="Path_18" data-name="Path 18" d="M627.616,530.481s-74.745-128.048-72.9-145.349c3.889,7.505,84.076,117.06,84.076,117.06Z" transform="translate(705.091 799.862) rotate(-172)" opacity="0.561" fill="url(#linear-gradient)"/>
                     <path id="Path_19" data-name="Path 19" d="M614.743,504.883s-61.731-105.976-60.028-119.751c3.584,5.976,75.1,95.957,75.1,95.957Z" transform="translate(783.097 693.816) rotate(175.988)" opacity="0.561" fill="url(#linear-gradient-4)"/>
                     <path id="Path_20" data-name="Path 20" d="M568.627,739.942c53.042,23.354,172.089,29.834,172.089,29.834s101.591,7.7,175.159-24.784" transform="translate(-349.32 -82.898)" fill="rgba(0,0,0,0)" stroke="rgba(112,112,112,0.27)" stroke-width="1"/>
                   </g>`;
                   colorSelect()
                   }
                 });



                        //////tshirt color ]
      

                        function colorSelect() {
                          let shirtColor=document.querySelector('.product-photo-bg > svg #Path_1');
                        

                          
                          if(shirtColorSelect !== null){
                            shirtColorSelect.addEventListener('change', () => {
                            if(shirtColorSelect.value == "Black"){
                              shirtColor.style.fill="rgb(41, 41, 41)"
                            }
                            else if(shirtColorSelect.value == "White"){
                              shirtColor.style.fill="rgb(249, 249, 249)"
                            }
                            
                            else if(shirtColorSelect.value == "Grey"){
                              shirtColor.style.fill="rgb(164, 163, 163)"
                            }
                            else if(shirtColorSelect.value == "Purple"){
                              shirtColor.style.fill="rgb(87,46,109)"
                            }
                            else if(shirtColorSelect.value == "Darkblue"){
                              shirtColor.style.fill="rgb(8, 18, 60)"
                            }
                            else if(shirtColorSelect.value == "Lightblue"){
                              shirtColor.style.fill="rgb(189,211,224)"
                            }
                            else if(shirtColorSelect.value == "Lightpink"){
                              shirtColor.style.fill="rgb(249,224,229)"
                            }
                            else if(shirtColorSelect.value == "Pink"){
                              shirtColor.style.fill="rgb(209,51,118)"
                            }
                            else if(shirtColorSelect.value == "Red"){
                              shirtColor.style.fill="rgb(180,40,40)"
                            }
                            else if(shirtColorSelect.value == "Orange"){
                              shirtColor.style.fill="rgb(240, 142, 50)"
                            }
                            else if(shirtColorSelect.value == "Yellow"){
                              shirtColor.style.fill="rgb(250,211,103)"
                            }
                          
                            });
                          }
                    
                        }
                        colorSelect()
           
                  }
                


                  //  ////////////////////////// display item screen
                  let pro_display=document.querySelector(".product-display");
                   let pro_display_bg=document.getElementById('modal')  
                   pro_display.style.display = "flex";
                    
                    pro_display_bg.style.position= "absolute";
                    pro_display_bg.style.background= " rgba(189, 189, 189, 0.96)";


                    /////////////////// close display item screen
                    let close = document.querySelector(".close-btn");
                    close.addEventListener("click", () => {
                      pro_display.style.display = "none";
                      pro_display_bg.style.position= "";
                    pro_display_bg.style.background= "";
                    });

                    
                    ////////////////////// grab data from display screen
                    let addbtn=document.querySelector('.btn1');

                    addbtn.addEventListener('click', (e)=>{

                      let s=document.querySelector('#size-value');
                      let c=document.querySelector('#color-value');
                      let t= document.querySelector('#type-value');

                      if(s.value==''|| c.value=='' || t.value ==''){
                        
                          if(s.value==''){s.style.border='1px solid red'; s.style.color='red';}
                          if(c.value==''){c.style.border='1px solid red'; c.style.color='red';}
                          if(t.value==''){t.style.border='1px solid red'; t.style.color='red';}
                        
                        e.preventDefault();
                      }else{
                        let basket_items=[];  
                        const item = list_items.find((obj) => obj.Id == +addbtn.dataset.basketid);
                        let basket_item={
                           Id: item.Id,
                           photo: item.img,
                           title: item.name,
                           size: document.querySelector('#size-value').value,
                           color: document.querySelector('#color-value').value,
                           type: document.querySelector('#type-value').value,
                           price:item.Price,
                           no: 1,
                           
                        }
                       
                        if (JSON.parse(localStorage.getItem("basket_items")) === null) {
                         
                           basket_items.push(basket_item);
                           localStorage.setItem("basket_items", JSON.stringify(basket_items));
                           
                         } else {
                           const localItems = JSON.parse(localStorage.getItem("basket_items"));
                           localItems.map((data) => {
                             if (basket_item.Id == data.Id) {
                               basket_item.no = data.no + 1;
                             } else {
                               basket_items.push(data);
                             }
                           });
                           basket_items.push(basket_item);
                           localStorage.setItem("basket_items", JSON.stringify(basket_items));
                           window.location.reload();
                        
                         }
                        
                      }
              
                    });
                   
           
      
}



// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{basket}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}

   
      // adding ITEMS NUmber in shopping cart;
      const iconShopping = document.getElementById("nav-items-count");
      if(iconShopping !==null ){
        let no = 0;
      
        if (JSON.parse(localStorage.getItem("basket_items")) === null) {
          no = "0";
        } else {
          JSON.parse(localStorage.getItem("basket_items")).map((data) => {
          
            no = no + data.no;
           
          });
          
          iconShopping.innerText = no;
        }
      }
   


////////////////////////////////////// basket dropdown
let s = document.querySelector(".nav-basket-btn");
if(s!==null){
s.addEventListener("click", show_hide);
function show_hide() {
  var click = document.getElementById("dorpdown");
  if (click.style.display === "none") {
    click.style.display = "flex";
  } else {
    click.style.display = "none";
  }
}
}
/////// adding cartbox data


            const basket_list = document.querySelector(".basket-list");
            if(basket_list !== null){
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
        
        if(e.target.parentElement.parentElement.children[2].children[1].innerText == data.Id  ){
          if(data.no>1){data.no+=-1}else{return}
   
           
          
         
        }
        basket_items.push(data);
      
       
       

      });
      localStorage.setItem("basket_items", JSON.stringify(basket_items));
      window.location.reload();

    })
            }


///// when list is empty

if (JSON.parse(localStorage.getItem("basket_items")) == "") {
  const basket_list = document.querySelector(".basket-list");
  if(basket_list!==null){
    basket_list.innerHTML=`<p class="empty-basket"> ~ List is EMPTY ~ </p>`
  }

}



