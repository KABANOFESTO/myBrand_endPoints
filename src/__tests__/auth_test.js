// import chai from 'chai';
// import { expect } from 'chai';
// import chaiHttp from 'chai-http';
// import User from '../models/user'

// import app from '../index';
// import dotenv from 'dotenv';

// dotenv.config();

// // console.log('db url',process.env.MONGO_TEST_URL)


// const tester = {
//   username: 'James',
// 	email: 'admin@gmail.com',
// 	password: '123456'

// };

// chai.expect();
// chai.use(chaiHttp);
// jest.setTimeout(50000)

// describe('Testing Auth routes', () => {

// 	beforeEach(async () => {
// 		await User.deleteMany({
// 			where: { email: { $not: ['admin@gmail.com'] } },
// 		});
// 	});

//   afterAll(async()=>{
//     User.deleteMany()
//   })

//   it("should throw an error if the password value is empty", async () => {
//     try {
     
//       await new User({
//         username: "sam",
//         email: "sam@ed.info",
//         password: ""
//       }).save()
//     } catch (err) {
//       expect(err.errors.password.message).equal("Please add a password")
//     }
//   })

//   it("should throw an error if the email value is empty", async () => {
//     try {
     
//       await new User({
//         username: "sam",
//         email: "",
//         password: "123456"
//       }).save()
//     } catch (err) {
//       expect(err.errors.email.message).equal("Please add a email")
//     }
//   })
// 	it('should register a user.', async () => {
// 		const res = await chai.request(app).post('/api/user/signUp').send((tester));
// 		expect(res.status).to.be.equal(201);
//     expect(res.body).to.be.a('object');
// 	});
// 	it('should login user.', async () => {
//     // jest.setTimeout(10000);
//         const user = await chai.request(app).post('/api/user/signUp').send(tester);
// 		const res = await chai.request(app).post('/api/user/login').send({email:user.email,password:user.password});
//     expect(res.status).to.be.equal(200);
// 	});
// });
