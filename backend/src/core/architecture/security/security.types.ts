import { RecommendationResult } from "../../../modules/recommendation/recommendation.types.js";

export interface SecurityMeasure {

  category: string;

  title: string;

  description: string;

}

export interface SecurityResult {

  authentication: string;

  authorization: string;

  encryption: string[];

  apiSecurity: string[];

  databaseSecurity: string[];

  infrastructureSecurity: string[];

  monitoring: string[];

  measures: SecurityMeasure[];

}

export interface BuildSecurityOptions {

  recommendation: RecommendationResult;

}

export interface SecurityEngine {

  build(
    options: BuildSecurityOptions
  ): SecurityResult;

}