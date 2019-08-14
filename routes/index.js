import express from "express";
import healthCheckController from "./controllers/healthCheckController.js";
import gameController from "./controllers/GameController";
import teamController from "./controllers/TeamController";
const router = express.Router();

router.get("/healthcheck", healthCheckController.getHealthCheck);

router.get("/games", gameController.getGameList);
router.post("/game", gameController.createGame);

router.get("/team", teamController.getTeamList);
router.post("/team", teamController.createTeam);

router.get("/game/:id", gameController.getGame);
router.put("/game/:id", gameController.udpateGame);
router.delete("/game/:id", gameController.deleteGame);

router.get("/team/:id", teamController.getTeam);
router.put("/team/:id", teamController.udpateTeam);
router.delete("/team/:id", teamController.deleteTeam);

export default router;
