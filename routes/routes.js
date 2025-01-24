import obterPastel from '../controller/pastel/obter.js';
import cadastrarPastel from '../controller/pastel/cadastrar.js';

export default function routes(app) {
  app.get('/api/pastel', obterPastel)
  .post('/api/pastel', cadastrarPastel);
  return app
}