const express = require('express');

const app = express();

// Get GET: Buscar informações do back-end
app.get('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
  ]);
});

// POST: Criar uma informação no back-end
app.post('/projects', (request, response) => {
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

// PUT/PATCH: Alterar informação no back-end
// Sempre colocar : qnd se tratar de um identificador
app.put('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3',
  ]);
});

// DELETE:  Deletar uma informação no back-end
app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});