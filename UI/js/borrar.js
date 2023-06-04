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
    document.querySelector('.btn-primary').addEventListener("click", loadEmployees);
}

function loadEmployees(){
    var nombre = document.getElementById('input-name').value;
    axios({
        method: 'get',
        url: `http://localhost:3000/user/${nombre}`
    }).then(function (res){
        if(res.data.code===200){
            console.log(res.data.message);
            displayEmployees(res.data.message);
        }
        else{
            alert("No existe el registro del empleado a buscar.");
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

function deleteEmployees(){
    var nombre = document.getElementById('input-name').value;
    var confirmacion = confirm("¿Estas seguro que deseas eliminar a este empleado?");
        if(confirmacion){
            axios({
                method: 'delete',
                url: `http://localhost:3000/user/${nombre}`,
            }).then(function(res){
                
                if(res.data.code===200){
                    alert("Empleado eliminado exitosamente");
                    window.location.href = "empleados.html";
                }else{
                    alert("Ha ocurrido un error en la eliminacion");
                }
            }).catch(function(err){
                console.log(err);
            })
        }else{
            alert("Ha ocurrido un error en la eliminacion");
            window.location.reload();
        }
    
}