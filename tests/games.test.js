import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";
import nock from "nock";

import listenApp from "./../app.js";
import game from "./game.test.constants";
import CONFIG from "./../config";
import GAME_CONSTANTS from "./../resources/constants/game.constants";
chai.use(chaiHttp);

describe("Game tests", function() {
  beforeEach(() => {
    nock(CONFIG.EXTERNAL.baseURL)
      .get(GAME_CONSTANTS.URL)
      .reply(200, [game]);
    nock(CONFIG.EXTERNAL.baseURL)
      .get(GAME_CONSTANTS.URL + "1")
      .reply(200, game);
    nock(CONFIG.EXTERNAL.baseURL)
      .post(GAME_CONSTANTS.URL)
      .reply(201);
    nock(CONFIG.EXTERNAL.baseURL)
      .put(GAME_CONSTANTS.URL + "1/")
      .reply(204);
  });
  it("Should get all games", done => {
    chai
      .request(listenApp)
      .get("/games")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        console.log(res.body);
        expect(res.body).to.deep.equal([game]);
        done();
      });
  });
  it("Should get game for id 1", done => {
    chai
      .request(listenApp)
      .get("/game/1")
      .end((err, res) => {
        expect(res.status).to.equal(200);
        console.log(res.body);
        expect(res.body).to.deep.equal(game);
        done();
      });
  });
  it("Should create game", done => {
    chai
      .request(listenApp)
      .post("/game")
      .end((err, res) => {
        expect(res.status).to.equal(201);
        done();
      });
  });
  it("Should update game for id 1", done => {
    chai
      .request(listenApp)
      .put("/game/1")
      .end((err, res) => {
        expect(res.status).to.equal(204);
        done();
      });
  });
});
