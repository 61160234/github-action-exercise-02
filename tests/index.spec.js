const request = require('supertest')
const app = require('../index')

describe('GET /', () => {
    it('responds with "Hello world!!!"', (done) => {
        request(app).get('/').expect('Hello world!!!', done)
    })
})

describe('GET /users', () => {
    it('responds with "No user in the system"', (done) => {
        request(app).get('/users').expect('No user in the system', done)
    })
})