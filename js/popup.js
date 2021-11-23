$(function (){

  var color = $("#fontColor").val();
$("#fontColor").on("Change paste keyup",function () {
    color = $(this).val();
})

  $("#btn_submit").click(function () {
    
      chrome.tabs.query({active:true, currentWindow:true},function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id,{todo:"addValue", valueChange:color})
      })
  })
})