import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { mapAlertDispatchToProps } from "../../alert/alertController";
import { getRoomTimetable, reserveRoom } from "../../../util/room";

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const RoomReservationTimetableTable = props => {
  const [msg, setMsg] = useState("");
  const [days, setDays] = useState([]);

  useEffect(() => {
    const prepareDays = async () => {
      const res = await getRoomTimetable(props.roomSymbol);
      setDays(res.days);
    };
    prepareDays();
  }, []);

  const goBack = () => {
    window.history.back();
  };

  const reserveHour = hour => {
    reserveRoom(hour._id, props.session.userId);
    updateDays();
    setMsg("Zarezerwowano salkę na godzine " + hour.value);
  };

  const updateDays = async () => {
    const res = await getRoomTimetable(props.roomSymbol);
    setDays(res.days);
  };

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      <h2>{props.title}</h2>
      {msg}

      {days.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th></th>
              {days.map(day => (
                <th>{day.dayOfWeek}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.hoursTemplate.map((hour, hourIndex) => (
              <tr>
                <th>{hour}</th>
                {days.map(day => (
                  <th>
                    {day.hours[hourIndex].isReserved === true ? (
                      <Button
                        variant="danger"
                        disabled="disabled"
                        onClick={() => {
                          reserveHour(day.hours[hourIndex]);
                        }}
                      >
                        {day.hours[hourIndex].value}
                      </Button>
                    ) : (
                      <Button
                        variant="success"
                        onClick={() => {
                          reserveHour(day.hours[hourIndex]);
                        }}
                      >
                        {day.hours[hourIndex].value}
                      </Button>
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
