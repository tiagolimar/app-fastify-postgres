import Fastify from 'fastify';

let fastify = Fastify({ logger: true });

fastify.get('/', (request, reply) => {
    return { message: 'Oi! chamado a partir da raiz!' }
});

fastify.listen({ host:'0.0.0.0', port: 3000 }, ()=>console.log('server running on port 3000'));