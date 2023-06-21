// container
// left shop 클릭 기능 
const c1Click = document.querySelector(".c1Click");
const c1GnbDepth2 = document.querySelector(".c1GnbDepth2");

c1Click.onclick = function(event){
    event.preventDefault();
    c1GnbDepth2.classList.toggle("on");
}


 // 태그의 속성값가져오기
 const menus = document.querySelectorAll(".c1_shopBtns li");
 menus.forEach(function (btn,idx) {
     btn.onclick = function (event) {
         event.preventDefault();
         let data = btn.getAttribute("data-shop");

         iso.arrange({
             filter:data
         });
     }
 });


 var elem = document.querySelector('.c1_shopWrap');
 var iso = new Isotope(elem, {
     // options
     itemSelector: '.all',
     layoutMode: 'fitRows'
 });

     // element argument can be a selector string
     //   for an individual element
     // var iso = new Isotope( '.grid', {
     //     // options
     // });


//이미지 변경
const shadowImg = document.querySelectorAll(".all > a > img")
for( let i = 0; i<shadowImg.length; i++){
 shadowImg[i].onmouseenter = function(event){
    event.preventDefault();
     shadowImg[i].setAttribute("src","/img/sub3_cont/shadow/"+[i]+".jpg")
    }
};
for( let i = 0; i<shadowImg.length; i++){
 shadowImg[i].onmouseleave = function(event){
    event.preventDefault();
     shadowImg[i].setAttribute("src","/img/sub3_cont/original/"+[i]+".jpg")
    }
};

