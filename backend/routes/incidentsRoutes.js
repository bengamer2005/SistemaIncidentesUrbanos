const router = require("express").Router()
const authUser = require("../middleware/authUser")
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

router.post("/incidents/catalog", authUser, createCatalogIncidents)

router.put("/incidents/catalog/:id", authUser, updateCatalogIncidents)

module.exports = router