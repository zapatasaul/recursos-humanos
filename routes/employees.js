const express = require("express");
const employees = express.Router();
const db = require('../config/databse');

employees.delete("/:name([A-Za-z]+)", async (req, res, next) =>{
    const query = `DELETE FROM datos WHERE Nombre = ${req.params.name}`;

    const rows = await db.query(query);

    if(rows.affectedRows == 1){
        return res.status(200).json({code: 200, message: "Empleado borrado correctamente"});
    }
    return res.status(404).json({code: 404, message: "Empleado no encontrado"})
});

employees.put("/:id([0-9]{1,3})", async (req, res, next) =>{
    const {pok_name, pok_height, pok_weight, pok_base_experience} = req.body;
    if(pok_name && pok_height && pok_weight &&pok_base_experience){
        let query = ` UPDATE pokemon SET pok_name ='${pok_name}',pok_height=${pok_height},`;
        query += ` pok_weight=${pok_weight},pok_base_experience=${pok_base_experience} WHERE pok_id = ${req.params.id}`;
        const rows = await db.query(query);

        if(rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Pokemon actualizado correctamente"});
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"});
    }
    
    return res.status(500).json({code: 500, message: "Campos incompletos"});
});

employees.get("/", async (req, res, next) =>{
    const emp = await db.query("SELECT * FROM datos");
    return res.status(200).json({code: 1, message: emp});
});

employees.get("/:name([A-Za-z]+)", async (req, res, next) =>{
    const name = req.params.name;
    const emp = await db.query("SELECT * FROM pokemon WHERE Nombre = " + "'" +name+ "'");
    (emp.length > 0) ? res.status(200).json({code: 1, message: emp}) : res.status(404).json({code: 404, message: "Empleado no encontrado"});
});

module.exports = employees;