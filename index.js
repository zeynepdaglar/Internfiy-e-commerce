function active(item){
 //menudiv içindeki divleri seçer
    $("#menuDiv div").removeClass("blueLine");
    $("#menuDiv div").removeClass("bluebox");
    $("#menuDiv a").removeClass("blueText");
    $(item).addClass("blueLine");
    $(item).find("div").addClass("bluebox");
    $(item).find("a").addClass("blueText");
}

function Toast(item) {
  $(item).empty().append("Ürün Özelliği Seç");
  var toastTrigger = document.getElementById('liveToastBtn')
  var toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
  var toast = new bootstrap.Toast(toastLiveExample)
  toast.show()
  }
}