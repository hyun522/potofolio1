// c1
// count 기능
const c1_plus = document.querySelector(".c1_plus")
const c1_minus = document.querySelector(".c1_minus")
const c1_countN = document.querySelector(".c1_countN")
const c1_divide_4_two = document.querySelector(".c1_divide_4_two")

// 변수 만들기 
let countNumber = 1;
let totalPrice = 0;
let productPrice = 52000;

// PLUS 버튼 눌렀을때
c1_plus.onclick = function(){
    if(countNumber === 10){
        c1_countN.innerText = 10;
    }
    else{
        countNumber = countNumber + 1;
        c1_countN.innerText = countNumber;
        totalPrice = productPrice * countNumber;
        c1_divide_4_two.innerText = "￦" + totalPrice.toLocaleString();
    }
}
//마이너스 버튼 눌렀을때 
c1_minus.onclick = function(){
    if(countNumber === 1){
        c1_countN.innerText = 1
    }
    else {
        countNumber = countNumber - 1;
        c1_countN.innerText = countNumber;
        totalPrice = productPrice * countNumber;
        c1_divide_4_two.innerText = "￦" + totalPrice.toLocaleString();

    }
}

// c1
// 버튼 기능 
const C1_bookmark = document.querySelector(".fa-bookmark")
const C1_heart = document.querySelector(".fa-heart")
C1_bookmark.onclick = function(){
    alert('찜하기 등록은 회원만 가능합니다. \n로그인 페이지로 이동하시겠습니까?')
}