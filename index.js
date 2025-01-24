import Fastify from 'fastify';
import routes from './routes/routes.js';

let fastify = Fastify({ logger: true });

fastify.get('/', (request, reply) => {
    return { message: 'Oi! chamado a partir da raiz!' }
});

fastify = routes(fastify);

fastify.listen({ host:'node', port: 3000 }, ()=>console.log('server running on port 3000'));