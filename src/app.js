const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi =require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 

//conectando o mongo com o mongoose
const db = require('./data/databasa');
db.connect();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const index = require('./routes/index');
const artist = require('./routes/artistsRoutes');
const music = require('./routes/musicRoutes');

app.use('/', index);
app.use('/artist', artist);
app.use('/music', music);

app.get('/terms', (req,res) => {
    return res.json({ message: 'Term of Service' });
});

module.exports = app;