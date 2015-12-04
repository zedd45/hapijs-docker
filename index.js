const Hapi = require('hapi');

const server = module.exports = new Hapi.Server();

server.connection({ port: 3000 });


server.route({
    method: 'GET',
    path: '/test-install',
    handler: function (reqest, reply) {

        reply('it works!');
    }
});

if (!module.parent) {
    server.start(function() {

        console.log('Server running at:', server.info.uri);
    });
}
