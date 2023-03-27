import { Router } from "express";
import { countEntities } from "../contoller/dashboard.controller";

const dashboardRouter = Router();

dashboardRouter.get(
    '/entitiesCount',
    countEntities
);

export default dashboardRouter;
