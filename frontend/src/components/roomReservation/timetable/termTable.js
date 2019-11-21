import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";

const RoomReservationTimetableTable = props => {
  const [msg, setMsg] = useState("");
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <Button onClick={goBack}>Back</Button>
      <h2>{props.title}</h2>
      {msg}
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th></th>
            {props.days.map((day, index) => (
              <th>{day.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.hoursTemplate.map((hour, hourIndex) => (
            <tr>
              <th>{hour}</th>
              {props.days.map((day, dayIndex) => (
                <th>
                  <Button
                    variant="success"
                    onClick={() => {
                      setMsg(
                        "Wybrano godzine " +
                          day.hours[hourIndex] +
                          " w " +
                          day.name
                      );
                      console.log(
                        "Selected " +
                          day.hours[hourIndex] +
                          " o'clock on " +
                          day.name
                      );
                    }}
                  >
                    {day.hours[hourIndex]}
                  </Button>
                </th>
              ))}
            </tr>
          ))}
          {/* {props.days.map((day, index) => (
            <tr>
              <th>
                {day.hours.map((hour, index) => (
                  <tr>
                    <th>{hour}</th>
                  </tr>
                ))}
              </th>
            </tr>
          ))} */}
          {/* <tr>
            <th></th>
            {props.days.map((day, index) => (
              <th>
                {day.hours.map((hour, index) => (
                  <tr>
                    <Button
                      variant="success"
                      onClick={() =>
                        console.log(
                          "Selected " + hour + " o'clock on " + day.name
                        )
                      }
                    >
                      {hour}
                    </Button>
                  </tr>
                ))}
              </th>
            ))}
          </tr> */}
        </tbody>
      </Table>
    </>
  );
};

export default RoomReservationTimetableTable;
