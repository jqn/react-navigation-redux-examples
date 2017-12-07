import * as types from './Types';

export function navigateBack() {
  return {
    type: types.NAVIGATE_BACK
  };
}

export function navigateRoot(screen, params) {
  return {
    type: types.NAVIGATE_ROOT,
    route: screen,
    params
  };
}

export function navigate(screen, params) {
  return {
    type: 'Navigation/NAVIGATE',
    route: screen,
    params
  };
}
