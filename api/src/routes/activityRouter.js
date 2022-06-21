const {Router}=require("express")
const {createActivity,getActivities}=require("../controllers/activity/activitiesController")
const { route } = require("./countryRouter")

const router=Router()

router.post("/",async(req,res)=>{
    try {
         const {name,difficulty,duration,season,countries}=req.body
         const act=await createActivity(name,difficulty,duration,season,countries)
         res.status(201).json("Se creo con exito la actividad")
    } catch (err) {
        console.log("Error"+err)
    }
})


module.exports=router;