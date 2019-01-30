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
    xhr.open("POST", "https://prod-24.eastus.logic.azure.com:443/workflows/4c2317a1f8fd4a5b8aad03c8df0f5f84/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=0c2qaQhxPsP7PHmYGppg6lX1k-ZHymsa-ur8J7Ltphw");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    var item = {         
         name: document.getElementById("name").value,
         email: document.getElementById("email").value
    };
        
    xhr.send(JSON.stringify(item));
 
    xhr.onloadend=function(){
        if (xhr.readyState==4 && xhr.status==200){
            var json_data = xhr.responseText;
            var response1 = JSON.parse(xhr.responseText);
                                   
            //document.getElementById("statusalert").innerHTML = response1.alert;

            //alertmsg.style.display = response1.alert
            //document.getElementById("alertmsg").class = "alert alert-success";
            
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