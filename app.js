// import express from 'express';
// import { mainRoutes } from './routes/index';
const express = require('express');
const { mainRoutes } = require('./routes/index');

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.use(mainRoutes);

app.listen(3000, () => {
    console.log('Server on port http://localhost:3000');
})