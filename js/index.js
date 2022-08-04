
$(document).ready(function(){



 //클릭하면 클래스명 on이 붙고 떨어지게 할것임
     $('.tab_list li').click(function(){
          $('.tab_list li').removeClass('on'); //일단 모든 on을 지워주고 시작
          $(this).addClass('on'); //이 클릭한 클래스에만 클래스명을 붙힘
          $('.tab_cont li').removeClass('on');
          //eq로 순서짝 찾고 index로 가져옴
          //순서찾기($(내가클릭한요소)).순서가져오기()))
          $('.tab_cont li').eq($(this).index()).addClass('on');
     });
});
