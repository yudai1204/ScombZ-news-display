$(function(){
    'use strict';
    if(document.getElementById("top_etc_contents")){
        document.getElementById("top_etc_contents").innerHTML = `
        <a href="https://scombz.shibaura-it.ac.jp/portal/home/information/list" class="InfoBlockLink">
        <div id="insertInfo">
        </div>
        </a>
        `;
        $.ajax({
            type:'GET',
            url:'/portal/home/information/list',
            dataType:'html'
        }).then(
            function(data){
                $("#insertInfo").after($(data).find("#information .block-contents"));
                const topContents = document.getElementById("top_etc_contents");
                const resultlist = topContents.querySelectorAll(".contents-display-flex.result-list");
                /*
                //重要通知は最大3個までしか表示しない
                const importants = topContents.querySelectorAll("span.portal-information-priority.portal-information-priority-important-color");
                for(let i = 5; i < importants.length; i++){
                    importants[i].parentNode.parentNode.remove();
                }
                */
                //既読は非表示
                for(let i = 0; i < resultlist.length; i++){
                    if(resultlist[i].getElementsByClassName("portal-information-unread").length === 0){
                        resultlist[i].remove();
                    }
                }
                document.getElementById("top_etc_contents").style.height = document.getElementById("top_etc_contents").getElementsByClassName("block-contents")[0].clientHeight+40+'px';
                ;
            }
        ,
            function(){
                alert("お知らせの読み込みに失敗しました");
            }
);
    }
});
