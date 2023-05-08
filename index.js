const express = require('express');
const path = require('path');
const { usuario, pessoa } = require('./models');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/pessoas', async function(req, res){
  var pessoas = await pessoa.findAll();
  res.render('index', { pessoas });
})

app.get('/pessoas/criar', async function(req, res){
  var pessoa = await usuario.findAll();
  res.render('pessoas/criar', { pessoa });
})

app.post('/pessoas/criar', async function(req, res){
  try {
      await pessoa.create(req.body);
      res.redirect('/pessoas')
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Ocorreu um erro ao criar o usuário.' });
  }
})

app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});