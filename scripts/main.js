function init() {
   
    let btn = document.getElementById('button');    
    
     btn.addEventListener('click', (e) => {
        processForm(e);
     })

}
  
document.addEventListener('DOMContentLoaded', init);

 function processForm(e) {
    if (e.preventDefault) e.preventDefault();
     
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://prod-44.eastus.logic.azure.com:443/workflows/552ff2f642f0400ab07c752d52f66f8d/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=cmInBYoTneHQO2EWMWApUDhXbsuMaR2jcSw1D-lX5kU");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    var item = {
         title: document.getElementById("title").value,
         description: document.getElementById("description").value,
         statement: document.getElementById("statement").value,
         name: document.getElementById("name").value,
         email: document.getElementById("email").value,
         url: document.getElementById("url").value
    };
        
    xhr.send(JSON.stringify(item));
 
    xhr.onloadend=function(){
        if (xhr.readyState==4 && xhr.status==200){
            var json_data = xhr.responseText;
            var response1 = JSON.parse(xhr.responseText);            
            document.getElementById("status").innerHTML = "<p id='status'><div id='alertmsg' class='alert alert-" + response1.alert + "' role='alert'>" + response1.status + "</div></p>";
            var x = document.getElementById("btn");
            if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
            if (frm.style.display === "none") {
                frm.style.display = "block";
            } else {
                frm.style.display = "none";
            }
        }
    }
    
    return "hi";
 }