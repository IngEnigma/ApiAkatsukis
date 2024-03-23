const models = require('../database/models/index.js');

const createAkatsuki = async (req, res) => {
    try{
        const akatsuki = await models.Akatsukis.create(req.body);
        return res.status(201).json({akatsuki}); 
    }
    catch(error){
        return res.status(500).send({error: error.message})
    }
}

const getAllAkatsuki = async (req, res) => {
    try{
        const akatsuki = await models.Akatsukis.findAll({include: []});
        return res.status(200).json({akatsuki}); 
    }
    catch(error){
        return res.status(500).send({error: error.message})
    }
}

module.exports = {
    createAkatsuki,
    getAllAkatsuki
}