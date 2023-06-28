//전체동의 체크박스 
const checkAll  = document.getElementById("checkAll")
//이용약관 체크 박스 
const checkLists = document.querySelectorAll(".checkLists_emo");
//회원가입 화면으로 넘어가기 위한 버튼
const loging = document.querySelector(".loging");

// 전체동의 클릭시 이용약관 체크박스 체크
checkAll.onclick = function(){
    let isChecked = checkAll.checked; //전체동의 체크박스 체크상태 값 변수에 대입  값 true false로 나옴
    checkLists.forEach(function(item){
        item.checked = isChecked;
    });
}
//이용약관 동의 3군데 체크박스 클릭시 기능
checkLists.forEach(function(item){
    item.onclick = function(){
        let count = document.querySelectorAll(".checkLists:checked").length;
        // 체크3개가 다 된상태
        if(count >= checkLists.length){
            checkAll.checked = true;
        }
        //체크가 하나라도 안되있을때?
        else { 
            checkAll.checked = false; 
        }
    }
});


