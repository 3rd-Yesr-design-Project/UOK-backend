// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
// Configure chai
chai.use(chaiHttp);
chai.should();

const { expect } = chai;
let token;
let categoryId;

describe('Testing user endpoints:', () => {
  it('It should Login', (done) => {
    let defaultUser = {
      email: 'anjanashakthi95@gmail.com',
      password: 'anjana',
    };
    chai
      .request('http://localhost:5000')
      .post('/api/v1/result/login')
      .send(defaultUser)
      .end((err, res) => {
        if (err) done(err);
        res.body.should.be.a('object');
        res.should.have.status(200);
        done();
      });
  });

  // it('It should get all users', (done) => {
  //   let r = Math.random().toString(36).substring(7);
  //   const body = {
  //     customer_id: 1,
  //     project_id: 1,
  //     category_name: r,
  //   };
  //   chai
  //     .request('http://localhost:4000')
  //     .get('/api/v1/all-user')
  //     .end((err, res) => {
  //       console.log(err);
  //       if (err) done(err);
  //       // console.log(res);
  //       // categoryId = res.body.data.id;
  //       expect(res).to.have.status(200);
  //       expect(res.body.success).to.equals(true);
  //       // expect(res.body.message).to.equals('Created');
  //       expect(res.body.data).to.be.an('array');
  //       done();
  //     });
  // });

  // it('should forget Password', (done) => {
  //   const body = {
  //     email: 'anjanashakthi95@gmail.com',
  //   };
  //   chai
  //     .request('http://localhost:5000')
  //     .post(`/api/v1/user/forgetpassword`)
  //     // .set({ Authorization: token })
  //     .send(body)
  //     .end((err, res) => {
  //       expect(res).to.have.status(200);
  //       expect(res.body.success).to.equals(true);
  //       expect(res.body.message).to.equals('Updated');
  //       done();
  //     });
  // });

  //   it('should updagte dwrCategory', (done) => {
  //     const projectId = 1;
  //     let r = Math.random().toString(36).substring(7);
  //     const category = {
  //       project_id: 1,
  //       category_name: r,
  //     };
  //     chai
  //       .request(app)
  //       .put(`/api/budget/category/${categoryId}/${projectId}`)
  //       .set({ Authorization: token })
  //       .send(category)
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body.success).to.equals(true);
  //         expect(res.body.message).to.equals('Updated');
  //         done();
  //       });
  //   });

  //   it('should delete the budget category', (done) => {
  //     const projectId = 1;
  //     chai
  //       .request(app)
  //       .delete(`/api/budget/category/${categoryId}/${projectId}`)
  //       .set({ Authorization: token })
  //       .end((err, res) => {
  //         expect(res).to.have.status(200);
  //         expect(res.body.success).to.equals(true);
  //         expect(res.body.message).to.equals('Deleted');
  //         done();
  //       });
  //   });
});
