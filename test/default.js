
// load libraries

const Code = require('code');
const Hapi = require('hapi');
const Lab = require('lab');


// test setup
const expect = Code.expect;
const lab = exports.lab = Lab.script();
const server = require('../index.js');


lab.test('the default route works', (done) => {

     server.inject('/test-install', function(response) {

        expect(response.payload).to.equal('it works!');
        done();
     });
});
