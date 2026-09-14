/**
 * Hex — core domain types.
 *
 * Everything is metric internally: meters, seconds, kilograms.
 * Convert to imperial only at the display layer.
 */

// ---------------------------------------------------------------------------
// Units
// ---------------------------------------------------------------------------

export type Meters = number;
export type Seconds = number;
export type Kilograms = number;

/** Pace as seconds per meter. Awkward to read, trivial to do math with. */
export type SecondsPerMeter = number;

export type Units = 'metric' | 'imperial';

// ---------------------------------------------------------------------------
// Runner
// ---------------------------------------------------------------------------

export type Experience = 'beginner' | 'intermediate' | 'advanced';
export type Sex = 'male' | 'female' | 'other';

export interface RunnerProfile {
  id: string;
  name: string;
  age: number;
  sex: Sex;
  heightCm: number;
  weightKg: Kilograms;
  experience: Experience;
  units: Units;
  restingHr?: number;
  maxHr?: number;
  thresholdHr?: number;
  daysAvailable: number;
}

// ---------------------------------------------------------------------------
// Performance and zones
// ---------------------------------------------------------------------------

export interface Performance {
  distance: Meters;
  time: Seconds;
}

export interface PaceZones {
  easy: SecondsPerMeter;
  marathon: SecondsPerMeter;
  threshold: SecondsPerMeter;
  interval: SecondsPerMeter;
  repetition: SecondsPerMeter;
}

export interface HrZones {
  z1: [number, number];
  z2: [number, number];
  z3: [number, number];
  z4: [number, number];
  z5: [number, number];
}

/** Versioned so we keep a history as fitness changes mid-plan. */
export interface FitnessSnapshot {
  vdot: number;
  paces: PaceZones;
  hr?: HrZones;
  derivedFrom: Performance[];
  createdAt: string;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const DISTANCES = {
  FIVE_K: 5_000,
  TEN_K: 10_000,
  HALF: 21_097.5,
  MARATHON: 42_195,
} as const;

export type RaceDistance = (typeof DISTANCES)[keyof typeof DISTANCES];

export const METERS_PER_MILE = 1_609.344;


