import { RecommendationResult } from "../../../modules/recommendation/recommendation.types.js";

export interface DeploymentStep {

  order: number;

  title: string;

  description: string;

}

export interface DeploymentResult {

  cloudProvider: string;

  containerization: string;

  orchestration: string;

  ciCd: string;

  reverseProxy: string;

  monitoring: string[];

  deploymentSteps: DeploymentStep[];

}

export interface BuildDeploymentOptions {

  recommendation: RecommendationResult;

}

export interface DeploymentEngine {

  build(
    options: BuildDeploymentOptions
  ): DeploymentResult;

}