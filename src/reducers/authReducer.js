import { LOGIN, LOGOUT, LOGINGOOGLE } from '../constants/actions';
import {googleAuthProvider} from "../firebase";


const initialState = {};

export default ( state = initialState, action ) => {
  switch( action.type ) {
    case LOGIN:
      return {
        ...state,
        uid: action.user
      };

    case LOGINGOOGLE :
      return {
        ...state,
        uid: action.signInWithPopup(googleAuthProvider)
      };

    case LOGOUT:
      return {};

    default:
      return state;
  }
}

