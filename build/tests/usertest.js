'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Configure chai
_chai2.default.use(_chaiHttp2.default); // Import the dependencies for testing

_chai2.default.should();

var expect = _chai2.default.expect;

var token = void 0;
var categoryId = void 0;

describe('Testing user endpoints:', function () {
  it('It should Login', function (done) {
    var defaultUser = {
      email: 'anjanashakthi95@gmail.com',
      password: 'anjana'
    };
    _chai2.default.request('http://localhost:4000').post('/api/v1/result/login').send(defaultUser).end(function (err, res) {
      if (err) done(err);
      res.body.should.be.a('object');
      res.should.have.status(200);
      done();
    });
  });

  it('It should get all users', function (done) {
    var r = Math.random().toString(36).substring(7);
    var body = {
      customer_id: 1,
      project_id: 1,
      category_name: r
    };
    _chai2.default.request('http://localhost:4000').get('/api/v1/all-user').end(function (err, res) {
      console.log(err);
      if (err) done(err);
      // console.log(res);
      // categoryId = res.body.data.id;
      expect(res).to.have.status(200);
      expect(res.body.success).to.equals(true);
      // expect(res.body.message).to.equals('Created');
      expect(res.body.data).to.be.an('array');
      done();
    });
  });

  it('should forget Password', function (done) {
    var body = {
      email: 'anjanashakthi95@gmail.com'
    };
    _chai2.default.request('http://localhost:4000').post('/api/v1/user/forgetpassword')
    // .set({ Authorization: token })
    .send(body).end(function (err, res) {
      expect(res).to.have.status(200);
      expect(res.body.success).to.equals(true);
      expect(res.body.message).to.equals('Updated');
      done();
    });
  });

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