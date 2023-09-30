const express = require('express');
const { mainRoutes } = require('./routes/index');

const app = express();

app.set('view engine', 'ejs');

app.use(mainRoutes);

app.listen(3000, () => {
    console.log('Server on port http://localhost:3000');
})