const express = require('express');
const Petro = require('../controllers/PetroCont')
const router = express.Router();
router
.route('/create')
.post(Petro.createPetro);

router
.route('/getPetro')
.get(Petro.getAllPetroStation)

router
.route('/:id')
.get(Petro.getOnePetro)
.patch(Petro.updatePetro)
.delete(Petro.deletePetrostation)

router
.route('/petroWithin/:distance/center/:latlng/unit/:unit')
.get(Petro.withinRadius);

router
.route('/distances/:latlng/unit/:unit').get(Petro.calcDistance)
module.exports = router