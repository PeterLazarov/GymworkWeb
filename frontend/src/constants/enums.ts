export enum Feeling {
  Sad = "sad",
  Neutral = "neutral",
  Happy = "happy",
}

export const feelingTexts = {
  [Feeling.Sad]: "Bad",
  [Feeling.Neutral]: "Good",
  [Feeling.Happy]: "Great",
} as const;

export enum Pain {
  NoPain = "noPain",
  Discomfort = "discomfort",
  Pain = "pain",
}

export const painTexts = {
  [Pain.NoPain]: "No Pain",
  [Pain.Discomfort]: "Discomfort",
  [Pain.Pain]: "Pain",
} as const;
