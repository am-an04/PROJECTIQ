// src/core/preprocessing/preprocessing.service.ts

import { PreprocessingResult } from "./preprocessing.types.js";

export class PreprocessingService {

  private static readonly STOP_WORDS = new Set([
    "a",
    "an",
    "the",
    "is",
    "are",
    "am",
    "was",
    "were",
    "to",
    "of",
    "for",
    "and",
    "or",
    "in",
    "on",
    "with",
    "by",
    "at",
    "from",
    "this",
    "that",
    "it",
    "be",
    "as"
  ]);

  private static readonly ABBREVIATIONS: Record<string, string> = {
    ai: "artificial intelligence",
    ml: "machine learning",
    ui: "user interface",
    ux: "user experience",
    db: "database",
    api: "application programming interface",
    auth: "authentication"
  };

  static process(text: string): PreprocessingResult {

    const originalText = text;

    let cleanedText = text
      .replace(/[^\w\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    cleanedText = cleanedText
      .split(" ")
      .map(word => {
        const lower = word.toLowerCase();
        return this.ABBREVIATIONS[lower] ?? word;
      })
      .join(" ");

    const normalizedText = cleanedText.toLowerCase();

    const tokens = normalizedText
      .split(" ")
      .filter(
        word =>
          word.length > 1 &&
          !this.STOP_WORDS.has(word)
      );

    const uniqueTokens = [...new Set(tokens)];

    return {
      originalText,
      cleanedText,
      normalizedText,
      tokens,
      uniqueTokens,
      tokenCount: uniqueTokens.length
    };
  }
}