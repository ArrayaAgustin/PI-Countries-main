const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Countries=require("./countryRouter")
const Activity=require("./activityRouter")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries",Countries)
router.use("/activities",Activity)

module.exports = router;