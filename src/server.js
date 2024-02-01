const fastify = require("fastify")({logger: true})

const until = require("util");
const timePromise = until.promisify(setTimeout)

fastify.get("/", (request, reply) => {
    let r = 0;

    for (let i = 0; i <= 50000000; i++) {
        r += i;
        
    }
    return {
        hello: r
    }
})

const start = async () => {
    try {
        await fastify.listen({host: "0.0.0.0", port: 3300})
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);
    }
}

module.exports = {
    start
}