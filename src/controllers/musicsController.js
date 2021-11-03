const mongoose = require('mongoose');
const musicSchema = require('../models/music');

const createMusic = async (req, res) => {
    const music = new musicSchema({
        _id: new mongoose.Types.ObjectId(), 
        title: req.body.title,
        composer: req.body.composer,
        genre: req.body.genre,
        letter: req.body.letter,
        time: req.body.time,
        created_at: req.body.created_at  
    })

    const existMusic = await musicSchema.findOne({ title: req.body.title })
    if (existMusic) {
        return res.status(409).json({ error: 'Title is already exists!' })
    }

    try {
        const newMusic = await music.save()
        res.status(201).json({
            message: 'Title created successfully!',
            newMusic
        })
    } catch (err) {
        res.status(400).json({ message: error.message })
    }
}

const getAll = async (req, res) => {
    try{
        const music = await musicSchema.find();
        res.status(200).json(music)
    } catch{
        res.status(500).json({ message: err.message });
    }
}

const getById = async (req, res) => {
    try{
        const { id } = req.params.id;
        const music = await musicSchema.find(id);
        
        if (music == undefined || id == ' '){
            return res.status(404).json({
                massage: 'Invalid id!'
            })
        }
        res.status(200).json(music);
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
}

const getByTitle = async (req, res) => {
    const title = req.query.title;
	await artistSchema.find({ title: title })

    return res.status(200).send(musicSchema)
}

const updateMusic = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body
        const update = { new: true }

        const music = await musicSchema.findByIdAndUpdate(id, body, update)
        return res.status(200).send(music)
    } catch (error) {
        return res.status(404).send({ message: 'Music cannot be found!' })
    }
}

// atualiza o valor ded uma chave individualmente PATCH
const updateSomething = async (req, res) => {

    const music = await musicSchema.findById(req.params.id)
    const body = req.body

    if (music == null) res.status(404).json({ message: 'Music cannot be found!' })

    Object.keys(body).forEach(key => {
        title[key] = body[key]
    })

    try {
        const musicUpdated = await music.save()
        res.status(200).json({
            message: "Music successfully updated!",
            musicUpdated
        })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteMusic = async (req, res) => {
    const music = await musicSchema.findById(req.params.id);

    if (music == ' ' || music == null) {
        return res.status(404).json({ message: 'Music cannot be found!' })
    }

    try {
        await music.remove()
        res.status(200).json({ message: "Music deleted successfully!" })

    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const like = async (req, res) => {
    try {
        const { id } = req.params
        music = await musicSchema.findById(id)

        music.likes += 1

        await musicSchema.updateOne(music)
        return res.status(200).send(music)
    } catch (error) {
        return res.status(404).send({ message: 'Music cannot be found' })
    }
}


const dislike = async (req, res) => {
    try {
        const { id } = req.params
        music = await musicSchema.findById(id)

        music.likes -= 1

        await musicSchema.updateOne(music)
        return res.status(200).send(music)
    } catch (error) {
        return res.status(404).send({ message: 'Music cannot be found' })
    }
}


module.exports = { 
    createMusic,
    getAll,
    getById,
    getByTitle,
    updateMusic,
    updateSomething, 
    deleteMusic,
    like,
    dislike
}