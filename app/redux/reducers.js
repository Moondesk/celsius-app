import { combineReducers } from 'redux';

import nav from './nav/navReducer';
import api from './api/apiReducer';
import ui from './ui/uiReducer';
import users from './users/usersReducer';
import generalData from './generalData/generalDataReducer';
import wallet from './wallet/walletReducer';
import interest from './interest/interestReducer';
import branch from './branch/branchReducer';
import transfers from './transfers/transfersReducer';
import loans from './loans/loansReducer';
import apiKeys from './apiKeys/apiKeysReducer';
import app from './app/appReducer';
import ACTIONS from "../config/constants/ACTIONS";
import camera from './camera/cameraReducer';
import forms from './forms/formsReducer';
// NOTE(fj): plop reduxGen importing new Reducer here

const appReducers = combineReducers({
  api,
  nav,
  users,
  ui,
  generalData,
  wallet,
  interest,
  branch,
  transfers,
  loans,
  apiKeys,
  app,
  camera,
  forms,
  // NOTE(fj): plop reduxGen inserting new Reducer here
})

function rootReducer(state, action) {
  let newState = state;
  if (action.type === ACTIONS.RESET_APP) newState = undefined;
  if (action.type === ACTIONS.LOGOUT_USER) newState = undefined;
  return appReducers(newState, action)
}

export default rootReducer;

