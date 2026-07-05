// src/core/ml/ml.types.ts

export interface MLPredictionRequest {
  input: unknown;
}

export interface MLPredictionResponse<T = unknown> {
  success: boolean;

  confidence: number;

  prediction: T | null;

  modelVersion: string | null;
}