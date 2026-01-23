import healthService from "/home/intern/Internship/Internship/learning26/src/services/healthService.js";

const healthController = (req,res) => {
    const data = healthService.getHealthStatus();
    res.status(200).json(data);
}

export default healthController;

