chrome.runtime.sendMessage({todo:"ShowPage"})

chrome.runtime.onMessage.addListener(function (request,render, sendResponse) {
    if(request.todo =="addValue"){
        var valueAdd =  request.valueChange;

         $("tr.notSunday ").each(function (index,elem){
           var date = toDate($(this).find("td>span").text());
           console.log(date.getDay())

           if (date.getDay() <6){
        
                $(this).find("td >textarea").text(valueAdd)
                $(this).find("td:nth-child(3) > input").val("8.00")
                if(valueAdd =="")
                    $(this).find("td:nth-child(3) > input").val("0.00")
                
           }
         });
    }
})

function toDate(dateStr) {
    var parts = dateStr.split("/")
    return new Date(parts[2], parts[1] - 1, parts[0])
  }