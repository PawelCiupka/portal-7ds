import { showSuccessAlert, showErrorAlert } from "../../actions/alert";
import {
  TICKET,
  USER,
  MANAGEMENT,
  ROOM_RESERVATION,
  MAIL
} from "../../helpers/alerts/predefinedMessages";

export const mapAlertDispatchToProps = dispatch => ({
  showSuccessAlert: ({ header, message }) =>
    dispatch(showSuccessAlert(header, message)),
  showErrorAlert: ({ header, message }) =>
    dispatch(showErrorAlert(header, message))
});

export const TicketAlerts = TICKET;
export const UserAlerts = USER;
export const ManagementAlerts = MANAGEMENT;
export const RoomReservationAlerts = ROOM_RESERVATION;
export const MailAlerts = MAIL;
