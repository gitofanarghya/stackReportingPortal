import { userConstants } from '../_constants';


let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user, refreshed: true, refreshing: false, access: false, checkingAccess: true } : {loggedIn: false, user: null, refreshed: true, refreshing: false, access: false, checkingAccess: true };

export function authentication(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        loggingIn: true,
        user: action.user,
        refreshed: true,
        refreshing: false,
        checkingAccess: true
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        user: action.user,
        refreshed: true,
        refreshing: false,
        checkingAccess: true
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.REFRESH_REQUEST:
      return {
        ...state,
        refreshing: true,
        refreshed: false
      };
    case userConstants.REFRESH_SUCCESS:
      return {
        ...state,
        refreshed: true,
        refreshing: false
      };
    case userConstants.REFRESH_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {
        ...state,loggedIn: false, user: null, refreshed: true, refreshing: false, checkingAccess: true 
      };
    case userConstants.SETACCESS:
      return {
        ...state,
        access: action.communities.find(c => c.name === 'PARC Living Westerleigh') === undefined ? false : true,
        refreshed: true,
        refreshing: false,
        checkingAccess: false
      }
    default:
      return state
  }
}