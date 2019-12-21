import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";
import {
  mapAlertDispatchToProps,
  RoomReservationAlerts
} from "../../alert/alertController";
import {
  getRoomTimetable,
  reserveRoom,
  cancelReservation,
  getNumberOfReservedRoomsByUserWeek,
  getNumberOfReservedRoomsByUserDay
} from "../../../util/room";
import RoomReservationTimetableFreeButton from "./utils/free";
import RoomReservationTimetableReservedButton from "./utils/reserved";
import {
  getTodayDate,
  getDatePlusNumberOfDays
} from "../../../helpers/dateHelper";
import RoomReservationTimetableHead from "./utils/tableHead";
import { checkUserRoomReservationPermission } from "../../../helpers/roomAccessHelper";

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const RoomReservationTimetableTable = props => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    updateDays();
  }, []);

  const updateDays = async () => {
    const days = await getRoomTimetable(props.roomSymbol);
    setDays(days.days);
  };

  const goBack = () => {
    window.history.back();
  };

  const manageHour = async hour => {
    if (
      hour.reservingUser !== null &&
      hour.reservingUser._id === props.session.userId
    ) {
      await cancelReservation(hour._id).then(resp => {
        if (resp.status === 200) {
          props.showSuccessAlert({
            message: RoomReservationAlerts.success.cancel_reservation
          });
        } else {
          props.showErrorAlert({
            message: RoomReservationAlerts.error.cancel_reservation
          });
        }
      });
    } else {
      let canReserve = true;

      // Chceck that user has permission to make reservation
      if (
        !checkUserRoomReservationPermission(
          props.session.roomAccess,
          props.roomSymbol
        )
      ) {
        canReserve = false;
        props.showErrorAlert({
          message: RoomReservationAlerts.error.permission
        });
      }

      // Check aamount of reservation - week
      const numberOfReservationsWeek = await getNumberOfReservedRoomsByUserWeek(
        props.roomSymbol,
        props.session.userId
      );
      if (numberOfReservationsWeek >= props.reservationAmountLimitWeek) {
        canReserve = false;
        props.showErrorAlert({
          message: RoomReservationAlerts.error.limit_reservation_week
        });
      }

      // Check amount of reservation - day
      const numberOfReservationsDay = await getNumberOfReservedRoomsByUserDay(
        props.roomSymbol,
        hour._id,
        props.session.userId
      );
      if (numberOfReservationsDay >= props.reservationAmountLimitDay) {
        canReserve = false;
        props.showErrorAlert({
          message: RoomReservationAlerts.error.limit_reservation_day
        });
      }

      if (canReserve === true) {
        await reserveRoom(hour._id, props.session.userId).then(resp => {
          if (resp.status === 200) {
            props.showSuccessAlert({
              message: RoomReservationAlerts.success.reserve_room
            });
          } else {
            props.showErrorAlert({
              message: RoomReservationAlerts.error.reserve_room
            });
          }
        });
      }
    }
    updateDays();
  };

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      <h2>{props.title}</h2>

      {days.length > 0 ? (
        <Table
          bordered
          striped
          responsive
          size="sm"
          className="room-reservation-table"
        >
          <thead>
            <tr>
              <th className="hours-col"></th>
              <th className="one-of-seven-cols">
                <RoomReservationTimetableHead date={getTodayDate()} />
              </th>
              <th className="one-of-seven-cols">
                <RoomReservationTimetableHead
                  date={getDatePlusNumberOfDays(1)}
                />
              </th>
              <th className="one-of-seven-cols">
                <RoomReservationTimetableHead
                  date={getDatePlusNumberOfDays(2)}
                />
              </th>
              <th className="one-of-seven-cols">
                <RoomReservationTimetableHead
                  date={getDatePlusNumberOfDays(3)}
                />
              </th>
              <th className="one-of-seven-cols">
                <RoomReservationTimetableHead
                  date={getDatePlusNumberOfDays(4)}
                />
              </th>
              <th className="one-of-seven-cols">
                <RoomReservationTimetableHead
                  date={getDatePlusNumberOfDays(5)}
                />
              </th>
              <th className="one-of-seven-cols">
                <RoomReservationTimetableHead
                  date={getDatePlusNumberOfDays(6)}
                />
              </th>
              {/* {days.map(day => (
                <th>{day.dayOfWeek}</th>
              ))} */}
            </tr>
          </thead>
          <tbody>
            {props.hoursTemplate.map((hour, hourIndex) => (
              <tr>
                <th>
                  <div className="reservation-hour-container">
                    <span>{hour}</span>
                  </div>
                </th>
                {days.map(day => (
                  <th>
                    {day.hours[hourIndex].isReserved === true ? (
                      <RoomReservationTimetableReservedButton
                        manageHourFunc={manageHour}
                        hour={day.hours[hourIndex]}
                        sessionUserId={props.session.userId}
                      />
                    ) : (
                      <RoomReservationTimetableFreeButton
                        manageHourFunc={manageHour}
                        hour={day.hours[hourIndex]}
                      />
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      ) : null}
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomReservationTimetableTable);
