const { Router } = require("express");

const OngController = require("./controllers/OngController");
const SessionController = require("./controllers/SessionController");
const ProfileController = require("./controllers/ProfileController");
const IncidentController = require("./controllers/IncidentController");

const routes = Router();

routes.post("/sessions", SessionController.create);

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

routes.get("/profile", ProfileController.index);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

module.exports = routes;
