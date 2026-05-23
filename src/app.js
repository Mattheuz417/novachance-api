const express = require('express');
const cors = require('cors');

require('./config/db');

const userRoutes = require('./routes/userRoutes');
const opportunityRoutes = require('./routes/opportunityRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

app.use('/opportunities', opportunityRoutes);

app.get('/', (req, res) => {
    res.send('API NovaChance funcionando!');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});