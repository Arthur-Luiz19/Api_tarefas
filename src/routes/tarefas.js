const express = require('express');
const tarefaController = require('../controllers/tarefaController');

const router = express.Router();

router.get('/', (req, res) => tarefaController.getAllTarefas(req, res));

router.post('/', (req, res) => tarefaController.createTarefa(req, res));

router.patch('/:id', tarefaController.concluirTarefa);

router.delete('/:id', tarefaController.excluirTarefa);

router.patch('/:id', tarefaController.editarTarefa);




module.exports = router;