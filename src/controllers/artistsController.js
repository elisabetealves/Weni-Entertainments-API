const mongoose = require('mongoose');
const artistSchema = require('../models/artist');

const createArtist = async (req, res) => {
    const artist = new artistSchema ({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        email: req.body.email,
        contactPhone: req.body.contactPhone,
        create_At: req.body.createIn,
    })

    const existArtis = await artistSchema.finfOne({  nome: req.body.nome });
    if(existArtis){
        return res.status(409).json({ error: 'Artist alredy exists!'});
    }

    try{
        const newArtist = await artist.save();
        res.status(201).json({
            'message': 'Artist created successfully!',
             newArtist
        });
    } catch{
        res.status(500).json({ message: err.message});
    }
}

const getAll = async (req, res) => {
    try{
        const artist = await artistSchema.find();
        res.status(200).json(artist)
    } catch{
        res.status(500).json({ message: err.message });
    }
}

const getById = async (req, res) => {
    try{
        const { id } = req.params.id;
        const artist = await artistSchema.find(id);
        
        if (artist == undefined || id == ' '){
            return res.status(404).json({
                massage: 'Invalid id!'
            })
        }
        res.status(200).json(artist);
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

const getByName = async (req, res) => {
    const name = req.query.name;
	await artistSchema.find({ name: name })

    return res.status(200).send(artistSchema)
}

const updateArtist = async (req, res) => {
    const artist = await artistSchema.findById(req.params.id)

    if (artist == null){
        return res.status(404).json({ message: 'Artist cannot be found!'})
    }

    if (req.body.name != null) {
        artist.name = req.body.name
    }

    if (req.body.description != null) {
        artist.description = req.body.description
    }

    if (req.body.email != null) {
        artist.email = req.body.email
    }

    if (req.body.contactPhone != null) {
        artist.contactPhone = req.body.contactPhone
    }

    try{
        const artistUpdate = await artist.save();
        res.status(200).json({
            'mensagem':'Artist sucessfully updated',
            artistUpdate
        })
    }catch{
        res.status(500).json({ message: err.message })
    }
}

const deleteArtist = async (req, res) => {
    const artist = await artistSchema.findById(req.params.id)

    if (artist == null) {
        return res.status(404).json({ message: 'Artist cannot be found' })
    }

    try {
        await artist.remove()
        res.status(200).json({ message: 'Artist deleted successfully deleted' })

    } catch (err) {
        res.ststus(500).json({ message: err.message })
    }
} 

module.exports = { 
    createArtist, 
    getAll,
    getById, 
    getByName,
    updateArtist,
    deleteArtist
}