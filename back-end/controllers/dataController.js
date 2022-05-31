const Work = require('../models/dataModel');

const createWork = (req,res) => {
    if(!req.body){
        res.status(400).send({message: 'There was a problem with your request, send the corresponding data!'})
    }
    
    const work = {
        title: req.body.title,
        author: req.body.author,
        description: req.body.description,
        github: req.body.github,
        img: req.body.img
    }

    Work.create(work)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(500).send({message: err.message}))
}

const findAllWorks = (req,res) => {
    Work.findAll({raw: true, order: [['id', 'ASC']]})
        .then(result => result !== null
                ? res.status(200).send(result)
                : res.status(400).send({message: 'There is no data, try creating some!'})
            )
        .catch(err => res.status(500).send({message: err.message}))
}

const findWorkById = (req, res) => {
    if(!req.params.id){
        res.status(400).send({message: 'There was a problem with your request, send the corresponding data!'})
    }

    Work.findByPk(req.params.id)
        .then(result => result !== null
                ? res.status(200).send(result)
                : res.status(400).send({message: `The id: ${req.params.id}, dosent exist!`})
            )
        .catch(err => res.status(500).send({message: err.message}))
}

const updateWork = (req, res) => {
    if(!req.body){
        res.status(400).send({message: 'There was a problem with your request, send the corresponding data!'})
    }
    Work.update(req.body, {where: {id: req.params.id}})
        .then(result => result !== 0
                ? res.status(200).send({message: 'Data updated!'})
                : res.status(400).send({message: `Cant update data with id: ${req.params.id}, because it dosent exist! ${result}`})
            )
        .catch(err => res.status(500).send({message: err.message}))
}

const deleteWork = (req, res) => {
    Work.destroy({where: {id: req.params.id}})
        .then(result => res.status(200).send({message: 'The movie was deleted!'}))
        .catch(err => res.status(500).send({message: err.message}))
}

module.exports = {
    createWork,
    findAllWorks,
    findWorkById,
    updateWork,
    deleteWork
}