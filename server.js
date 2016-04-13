'use strict';

const Hapi  = require('hapi');
const Inert = require('inert');
const rq    = require('request-promise');

const uri = 'http://api.adurcup.com/v4/products'
const options = {
    uri,
    headers: {
        'Authorization': '77069d1edf5323feab45c7c7eb0b06c9'
    },
    json: true
}

const server = new Hapi.Server();

server.connection({port: '5000'});


server.register(Inert, (err) => {
    if(err) {
        throw err;
    }
})

server.route({
    method: 'GET',
    path: '/adurcup',
    handler: (request, reply) => {
        rq(options)
            .then(reply)
            .catch(err => {
                reply({
                    message: 'No response',
                    error: err
                })
            })
    }
})

server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: __dirname
        }
    }
});

server.start((err) => {
    if(!err) {
        console.log(`Server running at ${server.info.uri}`);
    }
});

