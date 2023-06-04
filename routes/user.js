const express = require("express");
const jwt = require("jsonwebtoken");
const user = express.Router();
const db = require('../config/databse');

user.delete("/:name([A-Za-z]+)", async (req, res, next) =>{
    const name = req.params.name;
    const query = "DELETE FROM datos WHERE Nombre =" + "'" +name+ "'";
    const rows = await db.query(query);
    if(rows.affectedRows == 1){
        return res.status(200).json({code: 200, message: "Empleado borrado correctamente"});
    }
    return res.status(404).json({code: 404, message: "Empleado no encontrado"})
});

user.post("/signin", async (req, res, next) =>{
    const {Nombre, Apellidos, Correo, Telefono, Direccion} = req.body;

    if(Nombre && Apellidos && Correo && Telefono && Direccion){
        let query = "INSERT INTO datos (Nombre, Apellidos, Correo, Telefono, Direccion)";
        query += ` VALUES ('${Nombre}', '${Apellidos}', '${Correo}', '${Telefono}', '${Direccion}')`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Empleado registrado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"});
    }
    
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.post("/login", async (req, res, next) =>{
    const {Correo, Clave} = req.body;
    const query = `SELECT * FROM datos WHERE Correo = '${Correo}' AND Clave = '${Clave}'`;
    const rows = await db.query(query);

    if(Correo && Clave){
        if(rows.length == 1){
            const token = jwt.sign({
                Nombre: rows[0].Nombre,
                Correo: rows[0].Correo
            }, "debugkey");
            return res.status(200).json({code: 200, message: token});
        }
        else{
            return res.status(200).json({code: 401, message: "Usuario y/o contraseña incorrectos"});
        }
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.put("/:id([0-9]{1,3})", async (req, res, next) =>{
    const {Nombre, Apellidos, Correo, Telefono, Direccion} = req.body;
    if(Nombre && Apellidos && Correo &&Telefono && Direccion){
        let query = ` UPDATE datos SET Nombre ='${Nombre}',Apellidos='${Apellidos}',`;
        query += ` Correo='${Correo}',Telefono='${Telefono}',Direccion='${Direccion}' WHERE ID = ${req.params.id}`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Empleado actualizado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"});
    }
    
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

user.get("/", async (req, res, next) =>{
    const query = "SELECT * FROM datos";
    const rows = await db.query(query);
    return res.status(200).json({code: 200, message: rows})
});

user.get("/:name([A-Za-z]+)", async (req, res, next) =>{
    const name = req.params.name;
    if(name){
        const emp = await db.query("SELECT * FROM datos WHERE Nombre = " + "'" +name+ "'");
        if(emp.length > 0){
            return res.status(200).json({code: 200, message: emp});
        }
        return res.status(500).json({code: 500, message: "Empleado no encontrado"});
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

module.exports = user;