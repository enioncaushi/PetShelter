const Pet = require('../models/pet.model');

module.exports.createPet = (req, res) => {
    Pet.create(req.body)
        .then(pet => res.json(pet))
        .catch(err => {
            if (err.code === 11000) {  // This is the error code for duplicate key
                res.status(400).json({ errors: { name: { message: "Name must be unique" } } });
            } else {
                res.status(400).json({ errors: err.errors });
            }
        });
}

module.exports.getAllPets = (req, res) => {
    Pet.find({}).sort({type: 'asc'})
        .then(pets => res.json(pets))
        .catch(err => res.json(err));
}

module.exports.getPet = (req, res) => {
    Pet.findById(req.params.id)
        .then(pet => res.json(pet))
        .catch(err => res.json(err));
}

module.exports.updatePet = (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err));
}

module.exports.deletePet = (req, res) => {
    Pet.findByIdAndDelete(req.params.id)
        .then(result => res.json(result))
        .catch(err => res.json(err));
}

module.exports.likePet = (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, { $inc: { likes: 1 } }, { new: true })
        .then(updatedPet => res.json(updatedPet))
        .catch(err => res.status(400).json(err));
}