window.onload = init;
var headers = {};
var url = "http://localhost/3000";

function init(){
    if(localStorage.getItem("token")){
        headers = {
            headers:{
                'Authorization': "bearer " + localStorage.getItem("token")
            }
        }
    }
    else{
        window.location.href = "index.html";
    }
}

function cerrarSesion(){
    localStorage.removeItem("token");
    window.location.href = "index.html";
}