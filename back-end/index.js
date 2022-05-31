const express = require('express');
const sequelize = require('./models/connection')
const workRoutes = require('./routes/dataRoutes');
const cors = require('cors');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/', workRoutes);
app.use(cors());

sequelize.sync();

app.listen(app.get('port'), () => {
    console.log({server: `Listening on port http//localhost:${app.get('port')}`})
})

