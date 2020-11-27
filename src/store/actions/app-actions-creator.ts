import {ONBOARDING_HAS_BEEN_SEEN, AppActionTypes} from './app-actions-types';

export function onBoardingHasBeenSeen(): AppActionTypes {
  return {
    type: ONBOARDING_HAS_BEEN_SEEN,
  };
}
