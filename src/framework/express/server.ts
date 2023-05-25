import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import { Sequelize } from 'sequelize';
const app = express();

const database = require('../../core/repositorios/db');
const routes = require('./routes');
const path = require('path');

app.use(cors({
   origin: true
  })
);

(async () => {
  try { 
      const resultado = await database.sync();
      app.emit('pronto');      
  } catch (error) {
      console.log(error);
  }  
})();

app.use(express.json());
app.use(routes);


app.on('pronto', () => {
  app.listen(3000, () => {    
    console.log('Servidor executando');
  });
});
