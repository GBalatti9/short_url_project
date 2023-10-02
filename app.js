// import express from 'express';
// import { mainRoutes } from './routes/index';
const express = require('express');
const path = require('path');
const { mainRoutes, adminRoutes } = require('./routes/index');

const app = express()

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/'),
    path.join(__dirname, './views/login'),
])
app.use(adminRoutes);
app.use(mainRoutes);

app.listen(3000, () => {
    console.log('Server on port http://localhost:3000');
})