var works_list = [
    {logo:"portforio.png", name:"ポートフォリオ", contain:"当ポートフォリオです", url:'https://hanpeitamoka.github.io/moritaku.github.io/'},
    {logo:"kokokara.png", name:"第３回ココカラカイギ", contain:"学生団体「ココカラカイギ」の第三回目イベントののHPを担当しました", url:'https://kokokarakaigi.com/'},
    {logo:"nlp.png", name:"対話bot", contain:"大学の授業で送られた単語から文章を作成するbotを作成しました",url:'https://twitter.com/genngoroumaru'},
    {logo:"notify.png", name:"実験連絡くん", contain:"LINENotifyを使った研究室の予定をお知らせするRPAを作成しました"},
];



var resize_func = function (width) {
    $('#works_list').empty();
    //add member function
    $.each(works_list,function(i,v){
        $("#works_list").append("\
        <div class='col-3 col-md-12 col-lg-6' style='margin-bottom: 15px;'> \
            <center class='box' style='width: 100%; color: back;'> \
            <a href='"+v.url+"'><img src='image/works/"+v.logo+"' style='width: 100%;  border:1px var(--main-bg-color) solid; '> </a>\
            <div style='width: 200px; margin: 5px auto 0; font-size: 20px;  padding-bottom: 3px;'> \
                    "+v.name+"<br><br>\
            </div> \
            <div style='width: 100%; margin: 3px auto 0; font-size: 15px;'> \
                    "+v.contain+" \
            </div> \
            </center> \
        </div> \
        <br> \
        ");
    });
};


$(function(){
    resize_func($(window).width());
    $(window).resize(function(){
        resize_func($(window).width());
    });
});