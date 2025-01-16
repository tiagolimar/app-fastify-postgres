import Fastify from 'fastify';

// import routePastel from './routes/pastel/index.js';

let fastify = Fastify({ logger: true });

fastify.get('/', (request, reply) => {
    return { message: 'Oi! chamado a partir da raiz!' }
});

// fastify = routePastel(fastify);

fastify.listen({ port: 3000 });