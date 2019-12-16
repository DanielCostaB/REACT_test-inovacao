const port = process.env.PORT || 5000;

const express = require('express');
const app = express();
const { Funcionario, Custo, Departamento } = require('./models');

app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('Hello World');
});

const FUNCIONARIOS = '/api/funcionarios';
const CUSTOS = '/api/custos';
const DEPARTAMENTOS = '/api/departamentos';

[
  { path: FUNCIONARIOS, res: Funcionario },
  { path: CUSTOS, res: Custo },
  { path: DEPARTAMENTOS, res: Departamento }
].forEach(e => {
  app.get(e.path, (req, res) => res.send(e.res.findAll()));
  app.post(e.path, async (req, res) => {
    const funcionario = await e.res.create(req.body);
    res.json(funcionario);
  });
  app.get(`${e.path}/:id`, (req, res) => res.send(e.res.findAll({ where: { id: req.params.id } })));
  app.put(`${e.path}/:id`, (req, res) => res.send(e.res.update(req.body, { where: { id: req.params.id } })));
  app.delete(`${e.path}/:id`, (req, res) => e.res.destroy({ where: { id: req.params.id } }));
});

app.get('/api/mensagem', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));