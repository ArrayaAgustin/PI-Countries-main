const axios = require("axios");
const e = require("express");
const { Activity , Country } = require("../../db");
const {Op}=require("sequelize")

const getContriesDb=async(param="")=>{
    let busqueda=param===""?{}:{name:{
        [Op.iLike]:`%${param}%`
           }
    }
    try {
        const contries= await Country.findAll({
            where:busqueda,
            include:{
                    model:Activity,
                //    attributes: [''],
                    through:{
                            attributes: [],
                            }
                    }
        })
        
        return contries.length!==0?contries:[]; 
     
    } catch (err) {
        return new Error("Error: "+e)
    }
}


module.exports = { getContriesDb };

