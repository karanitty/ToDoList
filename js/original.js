window.onload = ajax();
function ajax(){

    //XMLHTTP request object
    var xhttp = new XMLHttpRequest();
    var url = "https://jsonplaceholder.typicode.com/todos";
    xhttp.open("GET",url,true);
    xhttp.onload = function(){

        
            console.log(xhttp.responseText);
            var response = JSON.parse(this.responseText);
            var output = "";
            for (var i=0;i<response.length;i++){
                output += "<li>"+ response[i].title +"</li>";
            }
            document.getElementById("demo").innerHTML = output;
         
    }

   
    xhttp.send();
}

