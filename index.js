function active(item){
 //menudiv içindeki divleri seçer
    $("#menuDiv div").removeClass("blueLine");
    $("#menuDiv div").removeClass("bluebox");
    $("#menuDiv a").removeClass("blueText");
    $(item).addClass("blueLine");
    $(item).children().addClass("bluebox");
    $(item).find("a").addClass("blueText");
}

