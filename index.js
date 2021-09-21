const express = require('express')
const port = process.env.port || 8080
const app = express()

app.get('/', (req, res) => {
    res.send('Hello world!!!')
})

app.get('/users', (req, res) => {
    res.send('No user in the system')
})

app.listen(port, () => {
    console.log('The app is up and running!')
})
module.exports = app

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