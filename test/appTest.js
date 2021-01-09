let chai = require("chai");
let chaiHttp = require("chai-http");
let mongoose = require("mongoose");
let todos = require('../models/TodoTask');
let server = require('../server');
const should = require('should');
const TodoTask = require("../models/TodoTask");
const { assert } = require("chai");

chai.use(chaiHttp);
//Our parent block
describe('todo Lists', () => {
  beforeEach((done) => {
    //Before each test we empty the database
    todos.deleteMany({}, (err) => {
      done();
    });
  });

  describe('/POST todos', () => {
    it('it should not POST a todos without pages field', (done) => {
      let todos = new TodoTask({ content: "Matrix", check: true, Date: 1854 })
      todos.save((err, todos) => {
        chai.request(server)
          .post('/')
          .send(todos)
          .end((err, res) => {
            res.status.should.be.equal(200);

            done();
          });
      });
    });

  });


  describe('/GET todo Lists', () => {
    it('it should GET all the lists', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {

          res.status.should.be.equal(200);

          res.should.be.json;

          done();
        });
    });
  })

});

/*
describe('/remove/:id book', () => {
  ('it should DELETE a todos given the id', (done) => {
    let todos = new TodoTask({ content: "The Chronicles of Narnia", check: true, Date: 1854 })
    todos.save((err, todos) => {
      chai.request(server)
        .get('/remove/:id')
        .end((err, res) => {
          res.status.should.be.equal(200);

          done();
        });
    });
  });
}); */