import mongoose from 'mongoose' 
mongoose.Promise = global.Promise
import supertest from 'supertest'
const cloudinary=require('cloudinary').v2;

const baseURL = 'http://localhost:3000/api/'
console.log(baseURL)
// import Sinon from 'sinon'
mongoose.connect ( 'mongodb://127.0.0.1:27017/acmedb', {
    useNewUrlParser: true
})
mongoose.connection.on( 'error', () => {
  throw new Error(`unable to connect to database: `)
})
mongoose.set('strictQuery', true);


const testingData={
    title:'testing article title',
    content:'testing article content',
    image:''
}
const testingDataUpdate={
    title:'testing article title update',
    content:'testing article content update',
    image:''

}

const admin={
    email:'admin@gmail.com',
    password:'123456'
}


describe('Testing Blog routes', () => {

    // const sandbox = Sinon.createSandbox();
    it('should create new blog article.',async()=>{
        const adminSignin=await supertest(baseURL).post('user/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
      
        const res=await supertest(baseURL).post('/post/add').send(testingData).set('Authorization', token)
   
        expect(res.status).toEqual(200);
    })
    it('should get all blog post.',async()=>{

        const res=await supertest(baseURL).get('/post/')
        expect(res.status).toEqual(200);
       
    }),
    it('should get one blog article by id',async()=>{
        const adminSignin=await supertest(baseURL).post('user/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const res1=await supertest(baseURL).post('/post/add').send(testingData).set('Authorization', token)
        const article=await supertest(baseURL).get('/post/')
        const id=article.body[0]._id
        const res=await supertest(baseURL).get(`/post/${id}`)
        expect(res.status).toEqual(200)
    })
    it('should update blog article',async()=>{
        const adminSignin=await supertest(baseURL).post('user/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const res1=await supertest(baseURL).post('/post/add').send(testingData).set('Authorization', token)
        const article=await supertest(baseURL).get('/post/')
        const id=article.body[0]._id
       
        const res=await supertest(baseURL).put(`/post/${id}/update`).send(testingDataUpdate).set('Authorization', token)
   
        expect(res.status).toEqual(200)
    })
    it('should delete blog article',async()=>{
        const adminSignin=await supertest(baseURL).post('user/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const article=await supertest(baseURL).get('/post/')

        const id=article.body[0]._id
        const res=await supertest(baseURL).delete(`/post/${id}`).set('Authorization', token)
      
        expect(res.status).toEqual(200)
  
    }),
    it('should comment on blog article',async()=>{
        const adminSignin=await supertest(baseURL).post('user/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const article=await supertest(baseURL).get('/post/')
        const id=article.body[0]._id
        const res=await supertest(baseURL).post(`/post/${id}/comment/`).send(testingDataUpdate).set('Authorization', token).send({"comment":"that content is very helpful thanks"})
        expect(res.status).toEqual(200)
    })
    it('should like on blog article',async()=>{
        const adminSignin=await supertest(baseURL).post('user/login').send(admin)
        const token = `Bearer ${adminSignin.body.user.token}`;
        const article=await supertest(baseURL).get('post/')
        const id=article.body[0]._id
        const res=await supertest(baseURL).post(`post/${id}/like`).send(testingDataUpdate).set('Authorization', token).send({"article_id":id})
        expect(res.status).toEqual(200)
    })
})