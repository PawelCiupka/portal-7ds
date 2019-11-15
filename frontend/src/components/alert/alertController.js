import { showSuccessAlert, showErrorAlert } from "../../actions/alert";
import { TICKET, USER } from "../../helpers/alerts/predefinedMessages";

export const mapAlertDispatchToProps = dispatch => ({
  showSuccessAlert: ({ header, message }) =>
    dispatch(showSuccessAlert(header, message)),
  showErrorAlert: ({ header, message }) =>
    dispatch(showErrorAlert(header, message))
});

export const TicketAlerts = TICKET;
export const UserAlerts = USER;
