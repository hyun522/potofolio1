const h_s_img = document.querySelectorAll(".wrap > a > img");
const sliderWrap = document.querySelector(".wrap");

value = 0;

setInterval(function(){
    if(value === h_s_img.length -1){
        value = 0;
    }
    else{
        value +=1; 
    }
    sliderWrap.style.marginTop =  - value *42 + "px";
},3000);

// 스크롤기능
const depth1 = document.querySelectorAll(".depth1 > li")
const d2 = document.querySelectorAll(".d2")
const depth2 = document.querySelectorAll(".d2_center")



for(let i=0; i<depth1.length; i++){
    depth1[i].onmouseenter = function(){
        d2[i].style.height = "80px";
        // 높이값이 늘어나는 것이기 때문에 css로 줄수 없다!
        d2[i].style.borderBottom = "1px solid #000";
        depth2[i].style.display = "flex";
        
    }
}
for(let i=0; i<depth1.length; i++){
    depth1[i].onmouseleave = function(){
        d2[i].style.height = "0px";
        d2[i].style.borderBottom = "none";
        depth2[i].style.display = "none";
    }
}


// 마우스 올리는 기능 
const h_mainGnb = document.querySelector(".h_mainGnb")
const h_mainLogo = document.querySelector(".h1_center > h1 > a > img  ")
console.log(h_mainLogo)

function h_open(){
    h_mainGnb.addEventListener("mouseenter",function(){
        h_mainLogo.setAttribute("src","/img/header/logo.png")
        
    })
    h_mainGnb.addEventListener("mouseleave",function(){
        h_mainLogo.setAttribute("src","/img/header/logo_white.png")
    })
}


// container
// 슬라이더 기능
// 이전
const c1_btnPrev = document.querySelector(".prev")
const c1_btnNext = document.querySelector(".next")
const c1_Slide = document.querySelector(".slide")
const c1_img = document.querySelectorAll(".c1_boxs > img")


sNumber = 0;

c1_btnPrev.onclick = function(){
    if( sNumber === 0 ){
        sNumber = 0
        c1_btnPrev.style.display = "none"
        
    }
    else{
        sNumber = sNumber-1; 
        
    }
    c1_Slide.style.marginLeft= - sNumber * 300 + "px";
    c1_btnNext.style.display = "block"
}

c1_btnNext.onclick = function(){
    if( sNumber === c1_img.length-5 ){
        sNumber = c1_img.length-5;
        c1_btnNext.style.display = "none"
        
    }
    else{
        sNumber = sNumber+1; 
    }
    c1_Slide.style.marginLeft= - sNumber * 300 + "px";
    c1_btnPrev.style.display = "block"
}


// h1, c3 
// 스크롤바의 위치값 생성
// (1)header영역의 classList
// (2)c3영역의 등장효과
const header = document.querySelector(".h_mainGnb")
const h1_img = document.querySelector(".h1_center > h1 > a > img")

const conts = document.querySelectorAll("#container > div")
const c3_box_1_p = document.querySelectorAll(".c3_box_1 > a > p")
const c3_box_1_img = document.querySelectorAll(".c3_box_1 > a > img")

const c4_box1_text = document.querySelector(".c4_box1_text")
const c5_box1_text = document.querySelector(".c5_box1_text")


console.log(header)
// 스크롤 기능 탑제
window.onscroll = function(){
    let scTop = window.scrollY; 
    // h1
    if(scTop > 0){
        header.classList.add("on");
    }
    else{
        header.classList.remove("on");
    }

   

    // c3
    if(scTop >= conts[1].offsetTop+50){
        for(let i = 0; i< c3_box_1_p.length; i++){
            c3_box_1_p[i].classList.add("on");
            c3_box_1_img[i].classList.add("on");
        }
    }

    //c4
    if(scTop >= conts[2].offsetTop+100){
        c4_box1_text.classList.add("on");
    }

    //c5
    if(scTop >= conts[3].offsetTop+100){
        c5_box1_text.classList.add("on");
    }


    

}



