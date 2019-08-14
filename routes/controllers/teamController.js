import teamService from "../../services/teamService";

class TeamController {
  getTeamList(req, res) {
    teamService.getAllTeams().then(response => {
      res.status(200).send(response.data);
    });
  }

  createTeam(req, res) {
    if (req.body) {
      teamService.createTeam(req.body).then(response => {
        res.status(201).send();
      });
    }
  }

  getTeam(req, res) {
    if (req.params.id) {
      teamService.getTeam(req.params.id).then(response => {
        res.status(200).send(response.data);
      });
    }
  }
  udpateTeam(req, res) {
    if (req.params.id) {
      teamService.updateTeam(req.params.id, req.body).then(response => {
        res.status(204).send(response.data);
      });
    }
  }
  deleteTeam(req, res) {
    if (req.params.id) {
      teamService.deleteTeam(req.params.id).then(response => {
        res.status(204).send(response.data);
      });
    }
  }
}

const teamController = new TeamController();
export default teamController;
