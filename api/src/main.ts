import fastify from 'fastify';
import constitutionalRoutes from './modules/constitutional/constitutional.routes';

const app = fastify();
const opts = {
    host: 'localhost',
    port: 3000,
    path: 'v0'
};

app.register(constitutionalRoutes, { prefix: '/constitutional' });

app.get('/', async (request, reply) => {
    return { message: 'Hello, world!' };
});

app.listen(opts, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server is running on ${address}`);
});