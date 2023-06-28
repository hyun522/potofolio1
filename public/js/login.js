// 아이디 로그인창 텍스트값 존재 -> X표 등장
// id, pass input
const memberid = document.querySelector("#memberid");
const memberpass = document.querySelector("#memberpass");
// 삭제버튼
const c1_del1 = document.querySelector(".c1_del_one");
const c1_del2 = document.querySelector(".c1_del_two");
const button = document.querySelectorAll(".login_form > div > button");
console.log(button)
// 로그인 버튼
const c1_log = document.querySelector(".c1_log");
// 폼태그
const login_form = document.querySelector("#login_form");


memberid.onkeydown= function(){
    c1_del1.style.display="block";
}
c1_del1.style.display="none";

memberpass.onkeydown= function(){
    c1_del2.style.display="block";
}
c1_del2.style.display="none";

// X표 클릭시 value값 비워주기

c1_del1.onclick= function(e){
    e.preventDefault();
    c1_del1.style.display="none";
    memberid.value = "";
    if(memberid.value == "" || memberpass.value == "" ){
        c1_log.setAttribute("disabled","false")
        c1_log.classList.remove("on")
    }   
}
c1_del2.onclick= function(e){
    e.preventDefault();
    c1_del2.style.display="none";
    memberpass.value = "";
    if(memberid.value == "" || memberpass.value == "" ){
        c1_log.setAttribute("disabled","false")
        c1_log.classList.remove("on")
    }   
    
}
// id pass의 입력값 둘다 존재시 로그인 버튼 눌려지도록
login_form.onkeyup= function(){
    if(memberid.value == "" || memberpass.value == "" ){
        // console.log(memberid.value);
        // c1_log.setAttribute("disabled","false")
        c1_log.classList.remove("on")
        c1_del1.style.display="none";
        c1_del2.style.display="none";
    }
    else{
        // c1_log.setAttribute("disabled","true");
        c1_log.classList.add("on")
        c1_del1.style.display="block";
        c1_del2.style.display="block";
    }
    

}


