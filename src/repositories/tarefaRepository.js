const Tarefa = require('../models/tarefa');

class TarefaRepository{
    async getAllTarefas() {
        try{
            return await Tarefa.findAll();
        }catch (error){
            throw new Error('Erro ao buscar todas as tarefas: ' + error.message);
        }
    }

    async createTarefa(tarefaData){
        try{
            return await Tarefa.create(tarefaData);
        } catch(error){
            throw new Error("Erro ao criar uma nova tarefa: " + error.message);
        }
    }

    async concluirTarefa(id){
        try{
            const tarefa = await Tarefa.findByPk(id)
            if(!tarefa){
                throw new Error(`Tarefa com ID${id} não encontrado`);
            }

            tarefa.concluida = !tarefa.concluida;
            await tarefa.save();
            return tarefa;
        } catch(err){
            throw new Error('Erro ao concluir a tarefa: ' + error.message);
        }
    }

    async deleteTarefa(id){
        try{
            const tarefa = await Tarefa.findByPk(id)
            if(!tarefa){
                throw new Error("Tarefa não encontrada");
            } 
             
            await tarefa.destroy({
                where: {
                    id: tarefa.id
                }
            });
            return {message: `Tarefa com ID${id} deletada com sucesso`}
        } catch(err){
            throw new Error("Erro ao excluir a tarefa")
        }
    }

    async updateTarefa(id, titulo, descricao){
        try{
            const tarefa = await Tarefa.findByPk(id)
            if(!tarefa){
                throw new Error("Tarefa não encontrada");
            }

            const [update] = await tarefa.update(
                {titulo, descricao},
                {where: {
                    id: tarefa.id
                }}
            );

            if (update === 0) {
                res.status(404).json({ message: "Usuário não encontrado" });
            }
            return tarefa;
        } catch(error){
            throw new Error("Erro ao editar tarefa");
        }
    }

    // ...Implementar restante dos métodos (update, delete, getby id)

}

module.exports = new TarefaRepository();