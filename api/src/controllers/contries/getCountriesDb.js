const axios = require("axios");
const e = require("express");
const { Activity , Country } = require("../../db");
const {Op}=require("sequelize")

const getContriesDb=async(param="")=>{
    let busqueda=param===""?{}:{name:{
        [Op.iLike]:`${param}%`
           }
    }
    try {
        const contries= await Country.findAll({
            where:busqueda,
            include:{
                    model:Activity,
                    attributes: ["name"],
                    through:{
                            attributes: [],
                            }
                    }
        })
        return contries.length!==0?contries:`Not found , no se encontro un pais que su nombre contenga: ${param}`;     
    } catch (err) {
        return new Error("Error: "+e)
    }
}

module.exports = { getContriesDb };

