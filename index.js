function active(item){
 //menudiv içindeki divleri seçer
    $("#menuDiv div").removeClass("blueLine");
    $("#menuDiv div").removeClass("bluebox");
    $("#menuDiv a").removeClass("blueText");
    $(item).addClass("blueLine");
    $(item).find("div").addClass("bluebox");
    $(item).find("a").addClass("blueText");
}

function mobilActive(item){
$("#mobilMenuDiv div").removeClass("mobilBlueLine");
$(item).find("div").addClass("mobilBlueLine");
}