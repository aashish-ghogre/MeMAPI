import customaxios from "./../axiosConfig.js";
import CONFIG from "./../config";
import GAME_CONSTANTS from "./../resources/constants/game.constants";
class GameService {
  getAllGames() {
    return customaxios.get(CONFIG.EXTERNAL.baseURL + GAME_CONSTANTS.URL);
  }

  createGame(game) {
    return customaxios.post(CONFIG.EXTERNAL.baseURL + GAME_CONSTANTS.URL, game);
  }

  getGame(id) {
    return customaxios.get(CONFIG.EXTERNAL.baseURL + GAME_CONSTANTS.URL + id);
  }
  updateGame(id, game) {
    return customaxios.put(
      CONFIG.EXTERNAL.baseURL + GAME_CONSTANTS.URL + id + "/",
      game
    );
  }
  deleteGame(id) {
    return customaxios.delete(
      CONFIG.EXTERNAL.baseURL + GAME_CONSTANTS.URL + id
    );
  }
}

const gameService = new GameService();
export default gameService;
