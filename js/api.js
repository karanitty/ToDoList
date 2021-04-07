window.onload = ajax();
function ajax(){

    //XMLHTTP request object
    var xhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos";
    xhttp.open("GET",url,true);
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i=0;i<response.length;i++){
                output += "<tr style = \"text-align: left;\">";
                output += "<td>"+ response[i].id +"</td>";
                output += "<td>"+ response[i].title +"</td>";
                if(response[i].completed == false){
                    output += "<th>"+ "<input type =\"checkbox\" id=\"box\" onclick = \"checkbox_check();\">" + "</input>" + "</th>"; 
                }
                else{
                    output += "<th>" + "<input type =\"checkbox\" checked disabled>" + "</input>" + "</th>"; 
                }
                output += "</tr>";
                document.getElementById("table_data").innerHTML = output;
            }
        }
    }
    xhttp.send();
}

var count = 0;
function checkbox_check(){
    var checkbox = document.getElementById("box");
    if (checkbox.checked == true){
        count++;
      }
    if(count == 5){
        alert("Congrats. 5 Tasks have been Successfully Completed");
        count = 0;
    }
}
