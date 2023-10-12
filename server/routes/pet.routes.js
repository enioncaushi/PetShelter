const PetController = require('../controllers/pet.controller');

module.exports = (app) => {
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets', PetController.getAllPets);
    app.get('/api/pets/:id', PetController.getPet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
    app.put('/api/pets/like/:id', PetController.likePet);
}