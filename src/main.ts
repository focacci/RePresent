import fastify from 'fastify';

const app = fastify();
const opts = {
    host: 'localhost',
    port: 3000,
    path: 'v0'
};

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