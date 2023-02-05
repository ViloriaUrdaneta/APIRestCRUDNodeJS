const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../app');
const User = require('../../models/user.model');


describe('Pruebas sobre API de user', () => {

    
    beforeAll(async () => {
        await mongoose.connect('mongodb://localhost:27017/users')
    });

    afterAll(async () => {
        await mongoose.disconnect();
    })

    describe('GET /api/users', () => {    

        let response;
        beforeEach(async () => {
            response = await request(app).get('/api/users').send();
        })

        it('la ruta funciona', async () => {
            
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('la ruta nos devuelve array de usuarios', async () => {

            expect(response.body).toBeInstanceOf(Array);
        });
    });

    describe('POST /api/users', () => {

        const newUser = { name: 'Johnny', email: 'johnny@email.com', password: '1234567'};
        const wrongUser = { name: 'Johnny' };

        afterAll(async () => {
            await User.deleteMany({ name: 'Johnny' });
        });

        it('la ruta funciona', async () => {
            const response = await request(app).post('/api/users').send(newUser);

            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })

        it('se inserta correctamente', async () => {
            const response = await request(app).post('/api/users').send(newUser);

            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe(newUser.name);
        })

        it('Error en la inscripcion', async () => {
            const response = await request(app).post('/api/users').send(wrongUser);

            expect(response.status).toBe(500);
            expect(response.body.error).toBeDefined();
        })



    });

    describe('PUT /api/users', () => {

        let user;
        beforeEach(async () => {
            user = await User.create({ name: 'Johnny', email: 'johnny@email.com', password: '1234567' });
        });

        afterEach(async () => {
            await User.findByIdAndDelete(user._id);
        });

        it('la ruta funciona', async () => {
            const response = await request(app).put(`/api/users/${user._id}`).send({ name: 'name updated'});
        
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        
        });

        it('se actualiza correctamente', async () => {
            const response = await request(app).put(`/api/users/${user._id}`).send({ name: 'name updated'});
        
            expect(response.body._id).toBeDefined();
            expect(response.body.name).toBe('name updated');
        
        });
    });

    describe('DELETE /api/users', () =>{

        let user;
        let response;
        beforeEach(async () => {
            user = await User.create({ name: 'Johnny', email: 'johnny@email.com', password: '1234567' });
            response = await request(app).delete(`/api/users/${user._id}`).send();
        });

        it('la ruta funciona', () => {

            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');

        });

        it('se borra correctamente', async () => {

            expect(response.body._id).toBeDefined();
            
            const foundUser = await User.findById(user._id);
            expect(foundUser).toBeNull();
        
        });


    })


})