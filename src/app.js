const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require("./config/database");
const tarefasRouter = require('./routes/tarefas');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/tarefas', tarefasRouter);

sequelize.sync().then(() => {
    console.log("Banco de dados sincronizado com sucesso");
    app.listen(port, () => {
        console.log(`Servidor rodando em <http://localhost>:${port}`);
    });
})
.catch(err => console.error('Erro ao sincronizar banco de dados:', err));