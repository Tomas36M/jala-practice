const express = require('express');
const router = express.Router();
const workController = require('../controllers/dataController')


router.get('/', () => {console.log('Welcome to work api! Use end point /api/work to query data!')})
router.get('/api/work', workController.findAllWorks);
router.get('/api/work/:id', workController.findWorkById);
router.post('/api/work', workController.createWork);
router.patch('/api/work/:id', workController.updateWork);
router.delete('/api/work/:id', workController.deleteWork);

module.exports = router;