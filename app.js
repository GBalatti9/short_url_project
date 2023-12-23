const express = require('express');
const methodOverride = require('method-override');

const { mainRoutes } = require('./routes/index');

const app = express()

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views');

app.use(mainRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on  ${ PORT }`);
})