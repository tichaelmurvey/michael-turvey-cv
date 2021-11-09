$( document ).ready(function(){
    $(".version").click(function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
    });
    $("#CV").click(function(){
        $("details").attr("open", true);
    });
    $("#resume").click(function(){
        $("details").removeAttr("open");
    });
});