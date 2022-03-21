

function Toast(item) {
  $(item).empty().append("Ürün Özelliği Seç");
  var toastTrigger = document.getElementById('liveToastBtn')
  var toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
  var toast = new bootstrap.Toast(toastLiveExample)
  toast.show()
  }
}