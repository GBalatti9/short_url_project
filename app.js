// import express from 'express';
// import { mainRoutes } from './routes/index';
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const { mainRoutes, adminRoutes, userRoutes } = require('./routes/index');

const app = express()

app.use(methodOverride('_method'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/'),
    path.join(__dirname, './views/login'),
    path.join(__dirname, './views/admin'),
])
app.use(adminRoutes);
app.use(userRoutes);
app.use(mainRoutes);

app.listen(3000, () => {
    console.log('Server on port http://localhost:3000');
})