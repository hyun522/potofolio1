// c2 
// 1) 탭메뉴 기능
// 클릭할 메뉴들 선택
const c2_gnb_1 = document.querySelectorAll(".c2_gnb_1 > li");

// 살아날 콘텐츠 박스
const c1_tabBox = document.querySelectorAll(".tab_wrap > div");

// 탭메뉴에 클릭기능 부과하기
for( let i =0; i < c2_gnb_1.length; i++ ){
 
    c2_gnb_1[i].onclick = function(event){
        event.preventDefault();
        // 탭메뉴 클릭시 css기능 적용하기
        for( let j = 0; j < c2_gnb_1.length; j++ ){
           
            c2_gnb_1[j].classList.remove("on")
            c1_tabBox[j].style.display = "none"
        }
        c2_gnb_1[i].classList.add("on")
        c1_tabBox[i].style.display = "block"
    }
}
console.log(c2_gnb_1.length);
