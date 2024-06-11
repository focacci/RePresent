import { FastifyInstance } from 'fastify';
import { getCurrentPresident } from './president';

export default async function executiveRoutes(fastify: FastifyInstance) {
    fastify.get('/', async (request, reply) => {
        reply.send({
            'message': 'GET all executive branch constitutional officials'
        });
    });

    fastify.get('/president', async (request, reply) => {
        const president = getCurrentPresident();
        reply.send({
            'message': 'GET president',
            'data': president
        });
    });
};