import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import listenApp from "./../app.js";

chai.use(chaiHttp);

describe("Health Check", function() {
  it("Should return success", done => {
    chai
      .request(listenApp)
      .get("/healthcheck")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        done();
      });
  });
});
