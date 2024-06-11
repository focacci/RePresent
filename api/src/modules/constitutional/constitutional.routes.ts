import { FastifyInstance } from 'fastify';
import executiveRoutes from './executive/executive.routes';

export default async function constitutionialRoutes(fastify: FastifyInstance) {
    fastify.register(executiveRoutes, { prefix: '/executive' });

    fastify.get('/legislative', async (request, reply) => {
        // Logic for handling the legislative branch route
        reply.send('This is the legislative branch route');
    });

    fastify.get('/judicial', async (request, reply) => {
        // Logic for handling the judicial branch route
        reply.send('This is the judicial branch route');
    });
}