// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
chai.use(chaiHttp);
chai.should();

const { expect } = chai;
let token;

describe('Testing user endpoints:', () => {
  it('It should result Login', (done) => {
    let defaultUser = {
      email: 'anjanashakthi95@gmail.com',
      password: 'kalana',
    };
    chai
      .request('http://localhost:5000')
      .post('/api/v1/result/login')
      .send(defaultUser)
      .end((err, res) => {
        if (err) done(err);
        token = res.body.data.token;
        res.body.should.be.a('object');
        res.should.have.status(200);
        done();
      });
  });

  it('It should social Login', (done) => {
    let defaultUser = {
      email: 'anjanashakthi95@gmail.com',
      password: 'kalana',
    };
    chai
      .request('http://localhost:5000')
      .post('/api/v1/social/login')
      .send(defaultUser)
      .end((err, res) => {
        if (err) done(err);
        token = res.body.data.token;
        res.body.should.be.a('object');
        res.should.have.status(200);
        done();
      });
  });

  it('It should get all users', (done) => {
    let r = Math.random().toString(36).substring(7);
    const body = {
      customer_id: 1,
      project_id: 1,
      category_name: r,
    };
    chai
      .request('http://localhost:5000')
      .get('/api/v1/all-user')
      .set({ Authorization: token })
      .end((err, res) => {
        if (err) done(err);
        expect(res).to.have.status(200);
        expect(res.body.success).to.equals(true);
        expect(res.body.data).to.be.an('array');
        done();
      });
  });

  it('should forget Password', (done) => {
    const body = {
      email: 'anjanashakthi95@gmail.com',
    };
    chai
      .request('http://localhost:5000')
      .post(`/api/v1/user/forgetpassword`)
      .send(body)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.success).to.equals(true);
        expect(res.body.message).to.equals('Updated');
        done();
      });
  });
});

describe('Testing profile endpoints:', () => {
  it('It should profile by userId', (done) => {
    chai
      .request('http://localhost:5000')
      .get(`/api/v1/profile/1`)
      .set({ Authorization: token })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.success).to.equals(true);
        expect(res.body.data).to.be.an('object');
        done();
      });
  });

  it('It should update profile', (done) => {
    const body = {
      project_id: 1,
      category_name: r,
    };
    chai
      .request('http://localhost:5000')
      .get(`/api/v1/profile/1`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.success).to.equals(true);
        expect(res.body.data).to.be.an('object');
        done();
      });
  });
});
