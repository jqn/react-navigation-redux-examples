import * as types from './Types';

export function navigateBack(_dispatch) {
  console.log('_dispatch', _dispatch);
  return {
    type: types.NAVIGATE_BACK,
    _dispatch
  };
}

export function navigateHome(route, id, title) {
  return {
    type: types.NAVIGATE_HOME,
    route,
    id,
    title
  };
}

export function navigate(screen, params) {
  return {
    type: 'Navigation/NAVIGATE',
    routeName: screen,
    params
  };
}
