import axios from "axios";
import CONFIG from "../config";
import TEAM_CONSTANTS from "../resources/constants/team.constants";
class TeamService {
  getAllTeams() {
    return axios.get(CONFIG.EXTERNAL.baseURL + TEAM_CONSTANTS.URL);
  }

  createTeam(team) {
    return axios.post(CONFIG.EXTERNAL.baseURL + TEAM_CONSTANTS.URL, team);
  }

  getTeam(id) {
    return axios.get(CONFIG.EXTERNAL.baseURL + TEAM_CONSTANTS.URL + id);
  }
  updateTeam(id, team) {
    return axios.put(
      CONFIG.EXTERNAL.baseURL + TEAM_CONSTANTS.URL + id + "/",
      team
    );
  }
  deleteTeam(id) {
    return axios.delete(CONFIG.EXTERNAL.baseURL + TEAM_CONSTANTS.URL + id);
  }
}

const teamService = new TeamService();
export default teamService;
