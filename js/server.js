const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

// Cria uma conexão com o MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'thiago2003',
  database: 'pi_decoracoes',
  insecureAuth: true
});

db.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL');
});

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Para servir arquivos estáticos como HTML, CSS etc.
app.use(express.static('.'));

// Rota POST para receber dados do formulário
app.post('/submit', (req, res) => {
  const { name, email, celular, data, tema, hora_desejada, mensagem } = req.body;

  // Log para debug
  console.log(req.body);

  // Validação simples
  if (!name || !email || !celular || !data || !mensagem) {
    res.status(400).json({ status: 'error', message: 'Todos os campos são obrigatórios' });
    return;
  }

  const query = 'INSERT INTO formulario (name, email, celular, data, tema, hora_desejada, mensagem) VALUES (?, ?, ?, ?, ?, ?, ?)';

  db.query(query, [name, email, celular, data, tema, hora_desejada, mensagem], (err, result) => {
    if (err) {
      res.status(500).json({ status: 'error', message: 'Não foi possível inserir os dados no banco de dados.' });
      console.log(err);
      return;
    }
    res.status(200).json({ status: 'success', message: 'Dados inseridos com sucesso!' });
  });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
