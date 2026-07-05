import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import healthRoutes from "./modules/health/health.route.js";
import { notFoundHandler } from "./middleware/notFound.middleware.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { projectRoutes } from "./modules/project/index.js";
import authRoutes from "./modules/auth/index.js";
import recommendationRoutes from "./modules/recommendation/index.js";
import planningRoutes from "./modules/planning/planning.routes.js";
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to ProjectIQ API",
    version: "1.0.0",
  });
});
app.use(
    "/api/v1/auth",
    authRoutes
);
app.use(
  "/api/v1/planning",
  planningRoutes
);
app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/recommendation", recommendationRoutes);
app.use(notFoundHandler);
app.use(errorHandler);

export default app;