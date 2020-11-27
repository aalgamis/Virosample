export const ONBOARDING_HAS_BEEN_SEEN = 'ONBOARDING_HAS_BEEN_SEEN';

export interface AppState {
  isOnBoardingHasBeenSeen: boolean;
}

interface OnboardingHasBeenSeen {
  type: typeof ONBOARDING_HAS_BEEN_SEEN;
}

export type AppActionTypes = OnboardingHasBeenSeen;
