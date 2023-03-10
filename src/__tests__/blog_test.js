import chai from 'chai';
import { expect } from 'chai';
import chaiHttp from 'chai-http';
import path from 'path'
import Sinon from 'sinon'

import app from '../app';
import Article from '../models/article'

import cloudinary from '../config/cloudinary';

import dotenv from 'dotenv';
import User from '../models/userModel'

dotenv.config();



const testingData = {
    title: 'testing article title',
    content: 'testing article content',
}
const testingDataUpdate = {
    title: 'testing article title update',
    content: 'testing article content update',
    image: ''

}
const tester = {
    username: 'James',
    email: 'admin1@gmail.com',
    password: '123456'

};

const admin = {
    email: 'admin1@gmail.com',
    password: '123456'
}

chai.expect();
chai.use(chaiHttp);

jest.setTimeout(4000000)
describe('Testing Blog routes', () => {
    const sandbox = Sinon.createSandbox();
    beforeAll(async () => {
        sandbox.stub(cloudinary, 'upload').resolves({
            url: 'wazaa',
        });
        await Article.deleteMany();
        await User.deleteMany()
        // await chai.request(app).post('/api/account/signUp').send((tester));
    }),
        // beforeEach(async()=>{
        //      await chai.request(app).post('/api/account/signUp').send((tester));
        // })

        afterEach(async () => {

        }),

        afterAll(async () => {
            await Article.deleteMany();
            await User.deleteMany()

        }),

        it('should create new blog article.', async () => {
            const r1 = await chai.request(app).post('/api/account/signUp').send((tester))
            const res = await chai.request(app).post('/api/articles/add').field('title', testingData.title).field('content', testingData.content).attach("photo", path.resolve(__dirname, './mock/tee.jpg')).set('Authorization', `Bearer ${r1.body.user.token}`)
            console.log(res.body)
            expect(res.status).to.be.equal(200);



        })
        ,
        it('should get all blog articles.', async () => {

            const res = await chai.request(app).get('/api/articles/')
            expect(res.status).to.be.equal(200);

        }),
        it('should get one blog article by id', async () => {
            const article = await chai.request(app).get('/api/articles/')
            const id = article.body[0]._id
            const res = await chai.request(app).get(`/api/articles/${id}`)
            expect(res.status).to.be.equal(200);
        }),
        it('should update blog article', async () => {
            const signUp = await chai.request(app).post('/api/account/signUp').send((tester));
            const adminSignin = await chai.request(app).post('/api/account/login').send(admin)
            const token = `Bearer ${adminSignin.body.user.token}`;
            const res1 = await chai.request(app).post('/api/articles/add').send(testingData).set('Authorization', token)
            const article = await chai.request(app).get('/api/articles/')
            const id = article.body[0]._id

            const res = await chai.request(app).put(`/api/articles/${id}/update`).send(testingDataUpdate).set('Authorization', token)

            expect(res.status).to.be.equal(200);
        }),
        it('should delete blog article', async () => {
            const signUp = await chai.request(app).post('/api/account/signUp').send((tester));
            const adminSignin = await chai.request(app).post('/api/account/login').send(admin)
            const token = `Bearer ${adminSignin.body.user.token}`;
            const article = await chai.request(app).get('/api/articles/')

            const id = article.body[0]._id
            const res = await chai.request(app).delete(`/api/articles/${id}`).set('Authorization', token)

            expect(res.status).to.be.equal(200);


        }),
        it('should comment on blog article', async () => {
            const signUp = await chai.request(app).post('/api/account/signUp').send((tester));
            const adminSignin = await chai.request(app).post('/api/account/login').send(admin)
            const token = `Bearer ${adminSignin.body.user.token}`;
            const article = await chai.request(app).get('/api/articles/')
            const id = article.body[0]._id
            const res = await chai.request(app).post(`/api/articles/${id}/comment/`).send(testingDataUpdate).set('Authorization', token).send({ "comment": "that content is very helpful thanks" })
            expect(res.status).to.be.equal(200);

        }),
        it('should like on blog article', async () => {
            const signUp = await chai.request(app).post('/api/account/signUp').send((tester));
            const adminSignin = await chai.request(app).post('/api/account/login').send(admin)
            const token = `Bearer ${adminSignin.body.user.token}`;
            const article = await chai.request(app).get('/api/articles/')
            const id = article.body[0]._id
            const res = await chai.request(app).post(`/api/articles/${id}/like`).send(testingDataUpdate).set('Authorization', token).send({ "article_id": id })
            expect(res.status).to.be.equal(200);

        })
})