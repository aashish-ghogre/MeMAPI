import gameService from "./../../services/gameService";
import teamService from "./../../services/teamService";

class GameController {
  getGameList(req, res) {
    gameService.getAllGames().then(response => {
      res.status(200).send(response.data);
    });
  }

  createGame(req, res) {
    if (req.body) {
      gameService.createGame(req.body).then(response => {
        res.status(201).send();
      });
    }
  }

  getGame(req, res) {
    if (req.params.id) {
      gameService.getGame(req.params.id).then(response => {
        res.status(200).send(response.data);
      });
    }
  }
  udpateGame(req, res) {
    if (req.params.id) {
      gameService.updateGame(req.params.id, req.body).then(response => {
        res.status(204).send(response.data);
      });
    }
  }
  deleteGame(req, res) {
    if (req.params.id) {
      gameService.deleteGame(req.params.id).then(response => {
        res.status(204).send(response.data);
      });
    }
  }
}

const gameController = new GameController();
export default gameController;
