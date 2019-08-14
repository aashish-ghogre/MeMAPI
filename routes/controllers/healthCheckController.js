/* eslint-disable class-methods-use-this */

class HealthCheckController {
  getHealthCheck(req, res) {
    return res.status(200).send({
      success: "true",
      message: "Service is up!!"
    });
  }
}

const healthCheckController = new HealthCheckController();
export default healthCheckController;
