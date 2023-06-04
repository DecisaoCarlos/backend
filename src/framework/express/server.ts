import 'express-async-errors';
import express from 'express';
import cors from 'cors';

const database = require('../../core/repositorios/db');
const routes = require('./routes');
const app = express();

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
