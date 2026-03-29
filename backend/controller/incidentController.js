const DB = require("../config/configDB")
// models
const CatalogIncidents = require("../models/catalogIncidentsModel")
const IncidentReports = require("../models/incidentReports")
const Incidents = require("../models/incidentsModel")
const IncidentStatusHistory = require("../models/incidentStatusHistoryModel")
const StatusIncidents = require("../models/statusIncidentsModel")
// services

// controllers - incidentes
// GET - todas las incidencias
const getAllIncidents = async (req, res) => {
    try {
        const allIncidents = await DB.query("SELECT * FROM incidents_view", {
            type: DB.QueryTypes.SELECT
        })

        if(allIncidents.length === 0) {
            return res.status(404).json({ message: "No se encontraron incidencias" })
        }

        res.status(200).json(allIncidents)
    } catch (error) {
        console.error("Ocurrio un error en getAllIncidents: ", error)
        res.status(500).json({ message: "Ocurrio un error en obtener todas las incidencia" })
    }
}

// todas las incidencias de un usuario


// controllers - catalogos
// GET - estatus de incidencias
const getAllStatusIncidents = async (req, res) => {
    try {
        const allStatusIncidents = await StatusIncidents.findAll()

        if(allStatusIncidents.length === 0) {
            return res.status(404).json({ message: "No se encontraron estatus para las incidencias" })
        }

        res.status(200).json(allStatusIncidents)
    } catch (error) {
        console.error("Ocurrio un error en getAllStatusIncidents: ", error)
        res.status(500).json({ message: "Ocurrio un error en obtener todas los estatus de incidencias" })
    }
}

// GET - catalogos de incidentes
const getCatalogIncidents = async (req, res) => {
    try {
        const allCatalogIncidents = await CatalogIncidents.findAll()

        if(allCatalogIncidents.length === 0) {
            return res.status(404).json({ message: "No se encontraron los catalogos de las incidencias" })
        }

        res.status(200).json(allCatalogIncidents)
    } catch (error) {
        console.error("Ocurrio un error en getCatalogIncidents: ", error)
        res.status(500).json({ message: "Ocurrio un error en obtener el catalogo de las incidencias" })
    }
}

// POST - catalogos de incidentes
const createCatalogIncidents = async (req, res) => {
    try {
        const { name, color } = req.body

        if(!name || !color) {
            return res.status(400).json({ message: "Faltan datos obligatorios" })
        }

        const newCatalogIncidents = await CatalogIncidents.create({
            name,
            color,
            // createdBy
        })

        res.status(200).json(newCatalogIncidents)
    } catch (error) {
        console.error("Ocurrio un error en createCatalogIncidents: ", error)
        res.status(500).json({ message: "Ocurrio un error en crear un nuevo catalogo de las incidencias" })
    }
}

// PUT - catalogos de incidentes
const updateCatalogIncidents = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const { name, color } = req.body

        await CatalogIncidents.update({
            name,
            color
        }, {
            where: { catalog_incidents_id: id }
        })

        res.status(200).json({ message: "Catalogo de incidentres actualizado correctamente" })
    } catch (error) {
        console.error("Ocurrio un error en updateCatalogIncidents: ", error)
        res.status(500).json({ message: "Ocurrio un error en actualizar un nuevo catalogo de las incidencias" })
    }
}

module.exports = {
    getAllIncidents,
    getAllStatusIncidents,
    getCatalogIncidents,
    createCatalogIncidents,
    updateCatalogIncidents
}