window.onload = init;
var headers = {};
var url = "http://localhost/3000";
var id;

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
    document.querySelector('.btn-primary').addEventListener("click", loadEmployees);
    document.getElementById('modificar').addEventListener("click", hability);
    document.getElementById('guardar').addEventListener("click", modifyInfo);
}

function loadEmployees(){
    var nombre = document.getElementById('input-name').value;
    axios({
        method: 'get',
        url: `http://localhost:3000/user/${nombre}`
    }).then(function (res){
        if(res.data.code===200){
            displayEmployees(res.data.message);
        }
        else{
            alert("No existen registros del empleado con el nombre ingresado.");
            window.location.reload();
        }
    }).catch(function (err){
        console.log(err);
    })
}

function displayEmployees(empleado){
    var lastName = document.getElementById("input-lastname");
    var mail = document.getElementById("input-mail");
    var phone = document.getElementById("input-phone");
    var address = document.getElementById("input-address");
    for(var i = 0; i < empleado.length; i++){
        id = empleado[i].ID;
        document.getElementById("input-lastname").value = empleado[i].Apellidos;
        lastName.disabled = true;
        document.getElementById("input-mail").value= empleado[i].Correo;
        mail.disabled = true;
        document.getElementById("input-phone").value= empleado[i].Telefono;
        phone.disabled = true;
        document.getElementById("input-address").value= empleado[i].Direccion;
        address.disabled = true;
        break;
    }
    return;
}

function hability(){
    document.getElementById('input-lastname').disabled = false;
    document.getElementById('input-phone').disabled = false;
    document.getElementById('input-mail').disabled = false;
    document.getElementById('input-address').disabled = false;
}

function modifyInfo(){
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var phone = document.getElementById('input-phone').value;
    var mail = document.getElementById('input-mail').value;
    var address = document.getElementById('input-address').value;
    axios({
        method: 'put',
        url: `http://localhost:3000/user/${id}`,
        data:{
            Nombre: name,
            Apellidos: lastname,
            Correo: mail,
            Telefono: phone,
            Direccion: address
        }
    }).then(function(res){
        if(res.data.code===200){
            alert("Empleado modificado exitosamente");
            window.location.href = "empleados.html";
        }else{
            alert("Ha ocurrido un error en el registro");
        }
    }).catch(function(err){
        console.log(err);
    })
}