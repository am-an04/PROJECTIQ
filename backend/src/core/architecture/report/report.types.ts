import { ArchitectureContext } from "../architecture.context.js";

export interface ArchitectureSection {

  title: string;

  content: string[];

}

export interface ArchitectureReport {

  title: string;

  generatedAt: string;

  version: string;

  sections: ArchitectureSection[];

}

export interface ReportEngine {

  build(
    context: ArchitectureContext
  ): ArchitectureReport;

}