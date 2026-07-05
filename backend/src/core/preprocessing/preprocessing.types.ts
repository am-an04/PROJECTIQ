// src/core/preprocessing/preprocessing.types.ts

export interface PreprocessingResult {
  originalText: string;

  cleanedText: string;

  normalizedText: string;

  tokens: string[];

  uniqueTokens: string[];

  tokenCount: number;
}