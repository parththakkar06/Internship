import { Router } from "express";
import {healthController} from "/home/intern/Internship/Internship/learning26/src/controllers/healthController";

const routes = Router();

routes.get("/health",healthController);

export default routes;