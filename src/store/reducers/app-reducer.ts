import produce from 'immer';

import {
  AppActionTypes,
  AppState,
  ONBOARDING_HAS_BEEN_SEEN,
} from '../actions/app-actions-types';

const initialState: AppState = {
  isOnBoardingHasBeenSeen: false,
};

export default (state = initialState, action: AppActionTypes): AppState =>
  produce(state, draft => {
    switch (action.type) {
      case ONBOARDING_HAS_BEEN_SEEN:
        draft.isOnBoardingHasBeenSeen = true;
        break;
      default:
        return draft;
    }
  });
