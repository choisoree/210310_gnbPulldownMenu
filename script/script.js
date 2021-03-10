$(function(){

            $("#gnb>ul#mainmenu>li").mouseover(function (){
//                 $(this).children("ul").stop().fadeIn(800);


                // 개별 슬라이드
                $(this).children("ul").stop().slideDown(1000);

                //전체 슬라이드
//                $(".subMenu").stop().slideDown(800);
            });

            $("#gnb>ul#mainmenu>li").mouseout(function (){
//                 $(this).children("ul").stop().fadeOut(800);

                // 개별 슬라이드
                 $(this).children("ul").stop().slideUp(400);

                                //전체 슬라이드
//                $(".subMenu").stop().slideUp(800);
            });

        });
