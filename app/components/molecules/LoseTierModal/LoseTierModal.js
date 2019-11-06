import React from "react";
import PropTypes from "prop-types";

import { MODALS } from "../../../constants/UI";
import InfoModalNew from "../InfoModalNew/InfoModalNew";

const LoseTierModal = ({ navigateToNextStep, tierTitle, closeModal }) => (
  <InfoModalNew
    picture={require("../../../../assets/images/modal-alert.png")}
    name={MODALS.LOSE_TIER_MODAL}
    heading="Watch out"
    paragraphs={[
      `You are about to lose your ${tierTitle} Celsius Loyalty Level.`,
      "Withdrawing CEL tokens affects your HODL ratio and Loyalty level.",
    ]}
    yesCopy="Continue"
    onYes={navigateToNextStep}
    noCopy="Go back"
    onNo={closeModal}
  />
);

LoseTierModal.propTypes = {
  navigateToNextStep: PropTypes.func.isRequired,
  tierTitle: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default LoseTierModal;
