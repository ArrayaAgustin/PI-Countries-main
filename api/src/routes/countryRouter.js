const {Router}=require("express")
const { getCountriesAll } = require("../controllers/contries/countriesController");
const { getCountry } = require("../controllers/country/countryController");

const router=Router()


router.get("/",async(req,res)=>{
  const {name}=req.query;
  
  const countries= await getCountriesAll(name);
  return res.json(countries)
})

router.get("/:id",async(req,res)=>{
    let{id}=req.params
    id=String(id).toUpperCase();
    
    const country=await getCountry(id)
    if(country){
      return res.status(200).json(country)
    }
   return res.status(404).send("Not Found , pais no encontrado...")
})



module.exports=router