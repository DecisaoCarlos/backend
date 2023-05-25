
const express = require('express');
const app = express();
const Sequelize = require('sequelize');
const database = require('../../core/repositorios/db');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

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
