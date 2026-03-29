const router = require("express").Router()
const {
    getAllIncidents,
    getAllStatusIncidents,
    getCatalogIncidents,
    createCatalogIncidents,
    updateCatalogIncidents
} = require("../controller/incidentController")

router.get("/incidents", getAllIncidents)
router.get("/incidents/status", getAllStatusIncidents)

router.get("/incidents/catalog", getCatalogIncidents)
router.post("/incidents/catalog", createCatalogIncidents)
router.put("/incidents/catalog/:id", updateCatalogIncidents)

module.exports = router