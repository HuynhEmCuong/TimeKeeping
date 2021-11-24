$(function (){

  var color = $("#value").val();
$("#value").on("Change paste keyup",function () {
    color = $(this).val();
})

  $("#btn_submit").click(function () {
      chrome.tabs.query({active:true, currentWindow:true},function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id,{todo:"addValue", valueChange:color})
      })
  })

  $("#btn_delete").click(function () {
    color ="";
    $("#value").val("");
    chrome.tabs.query({active:true, currentWindow:true},function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id,{todo:"addValue", valueChange:color})
    })
})
  
})