let headerBottom=document.querySelector(".headerBottom"),imgsArry=["https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider13_49090674-d1ef-4c34-95b9-19c1edac4d15_4100x.jpg?v=1585640180","https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider12_4d489365-da55-49c6-9504-a1f5f82b4111_1296x.jpg?v=1585640309","https://cdn.shopify.com/s/files/1/0332/6420/5963/files/slider11_2bfeeb77-be99-4c7c-8354-a628a9d424d5_1296x.jpg?v=1585640322"],sliderContentArry=[...document.querySelectorAll(".headerBottom__content")],bullet=[...document.querySelector(".headerBottom__pagination").children];var currentSlide=0;function reset(){for(let e=0;e<bullet.length;e++)bullet[e].classList.remove("active"),sliderContentArry[e].classList.remove("active")}headerBottom.style.backgroundImage=`url("${imgsArry[currentSlide]}")`,bullet.forEach((e,t)=>{e.addEventListener("click",function(){reset(),currentSlide=t,headerBottom.style.backgroundImage=`url("${imgsArry[currentSlide]}")`,sliderContentArry[currentSlide].classList.add("active"),e.classList.add("active"),1==currentSlide&&(sliderContentArry[currentSlide].style.textAlign="right")})});