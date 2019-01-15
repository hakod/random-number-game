const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");

chai.use(chaiHttp);
const should = chai.should();

describe("Test game", function() {
  context("POST", function() {
    it("number test", function(done) {
      chai
        .request(server)
        .post("/guess")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({ num: 45 })
        .end(function(err, res) {
          res.should.have.status(404);
          done(err);
        });
    });
  });
});
