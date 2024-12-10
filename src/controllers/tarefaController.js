const tarefaRepository = require('../repositories/tarefaRepository');
const tarefaController = require('../repositories/tarefaRepository');

class TarefaController {
    async getAllTarefas(req, res) {
        try{
            const tarefas = await tarefaRepository.getAllTarefas();
            res.json(tarefas);
        } catch(error) {
            res.status(500).json({erro: error.message});
        }
    }

    async createTarefa(req, res) {
        const {titulo, descricao, concluida} = req.body;
        try{
            const novaTarefa = await tarefaRepository.createTarefa({titulo, descricao, concluida});
            res.status(201).json(novaTarefa);
        }catch(error) {
            res.status(500).json({error: error.message});
        }
    }

    // ...Implementar restante dos métodos (update, delete, getby id)
}

module.exports = new TarefaController();