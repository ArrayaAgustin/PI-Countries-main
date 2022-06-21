const {DataTypes, Sequelize}=require("sequelize")

module.exports=(Sequelize)=>{
    Sequelize.define('Activity',{
       name:{
        type:DataTypes.STRING,
        allowNull:false
       },
       difficulty:{
        type:DataTypes.ENUM('1','2','3','4','5'),
        allowNull:false
       },
       duration: {
        type: DataTypes.DECIMAL,
        allowNull:false
    },
       season: {
        type: DataTypes.ENUM('Summer','Autumn','Winter','Spring'),
        allowNull: false
    },

    },{timestamps:false})
}

// Actividad Turística con las siguientes propiedades:
// ID
// Nombre
// Dificultad (Entre 1 y 5)
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)