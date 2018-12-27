import ACTIONS from "../../config/constants/ACTIONS";
import * as transfersActions from '../transfers/transfersActions';
import * as uiActions from '../ui/uiActions';
import branchService from '../../services/branch-service';
import { BRANCH_LINKS, MODALS } from "../../config/constants/common";
import API from "../../config/constants/API";
import { apiError, startApiCall } from "../api/apiActions";
import { createIndividualLinkBUO } from "../../utils/branch-util";

export {
  registerBranchLink,
  saveBranchLink,
  createBranchIndividualLink,
}

function saveBranchLink(rawLink) {
  return async (dispatch) => {
    try {
      dispatch(startApiCall(API.SAVE_BRANCH_LINK));
      const branchLink = await branchService.create(rawLink);

      dispatch({
        type: ACTIONS.SAVE_BRANCH_LINK_SUCCESS,
        branchLink: branchLink.data,
      });
    } catch(err) {
      dispatch(apiError(API.SAVE_BRANCH_LINK, err));
    }
  }
}

function createBranchIndividualLink() {
  return async (dispatch) => {
    const branchLink = await createIndividualLinkBUO()
    dispatch({
      type: ACTIONS.SET_INDIVIDUAL_REFERRAL_LINK,
      link: branchLink.url,
    })
  }
}

function registerBranchLink(deepLink) {
  return (dispatch, getState) => {
    dispatch({
      type: ACTIONS.BRANCH_LINK_REGISTERED,
      link: deepLink,
    })

    switch (deepLink.link_type) {
      case BRANCH_LINKS.TRANSFER:
        dispatch(transfersActions.registerTransferLink(deepLink));
        break;

      case BRANCH_LINKS.COMPANY_REFERRAL:
        if (!deepLink.expiration_date || new Date(deepLink.expiration_date) > new Date()) {
          if (!getState().users.user) {
            dispatch(uiActions.openModal(MODALS.REFERRAL_RECEIVED_MODAL));
          } else {
            dispatch(uiActions.showMessage('warning', 'Sorry, but existing users can\'t use this link!'))
          }
        } else {
          dispatch(uiActions.showMessage('warning', 'Sorry, but this link has expired!'))
        }
        break;

      case BRANCH_LINKS.INDIVIDUAL_REFERRAL:
        if (!getState().users.user) {
          // TODO: should save all branch links
          dispatch(saveBranchLink(deepLink));
          dispatch(uiActions.openModal(MODALS.REFERRAL_RECEIVED_MODAL));
        } else {
          dispatch(uiActions.showMessage('warning', 'Sorry, but existing users can\'t use this link!'))
        }
        break;

        default:

    }
  }
}
