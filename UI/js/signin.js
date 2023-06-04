window.onload = init;
var headers = {};
var url = "http://localhost/3000";

function init (){
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
    document.querySelector('.btn-secondary').addEventListener("click", function(){
        window.location.href = "empleados.html";
    })

    document.querySelector('.btn-primary').addEventListener("click", signin);
}

function signin(){
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    axios({
        method: 'post',
        url: 'http://localhost:3000/user/signin',
        data:{
            Nombre: name,
            Apellidos: lastname,
            Correo: mail,
            Telefono: phone,
            Direccion: address
        }
    }).then(function(res){
        if(res.data.code===200){
            alert("Empleado regitrado exitosamente");
            window.location.href = "empleados.html";
        }else{
            alert("Ha ocurrido un error en el registro");
        }
    }).catch(function(err){
        console.log(err);
    })
}