import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import { Icon } from "semantic-ui-react";
import {
  mapAlertDispatchToProps,
  RoomReservationAlerts
} from "../alert/alertController";
import { cancelReservation } from "../../util/room";
import {
  getAllUserReservations,
  getAmountOfUserReservations
} from "../../util/dashboard";
import { getReservationDateString } from "../../helpers/dateHelper";

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const DashboardUserReservationTable = props => {
  const [isActionDone, setIsActionDone] = useState(true);
  const [data, setData] = useState({ columns: [], rows: [] });

  useEffect(() => {
    updateReservations();
  }, []);

  useEffect(() => {
    const doUpdateData = async () => {
      if (isActionDone === true) {
        if (
          data.rows.length ===
          (await getAmountOfUserReservations(props.session.userId))
        ) {
          setIsActionDone(false);
          updateReservations();
        }
      }
    };

    doUpdateData();
  });

  const updateReservations = async () => {
    await getAllUserReservations(props.session.userId).then(data => {
      updateData(data);
    });
  };

  const updateData = reservations => {
    let result = {
      columns: [
        { label: "Co?", field: "room", sort: "asc" },
        { label: "Kiedy?", field: "date", sort: "asc" },
        { label: "", field: "action", sort: "asc" }
      ],
      rows: []
    };

    reservations.forEach(reservation => {
      const r = {
        room: reservation.room,
        date: getReservationDateString(
          reservation.dayOfWeek,
          reservation.hourValue
        ),
        action: (
          <Button variant="danger" onClick={() => cancel(reservation.hourId)}>
            <Icon name="cancel" />
          </Button>
        )
      };
      result.rows.push(r);
    });

    setData(result);
  };

  const cancel = async hourId => {
    await cancelReservation(hourId).then(resp => {
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
    await setIsActionDone(true);
    await updateReservations();
  };

  return (
    <>
      <section className="dashboard-table-container">
        <MDBDataTable
          bordered
          small
          hover
          data={data}
          displayEntries={false}
          info={false}
          searching={false}
          entries={4}
          paginationLabel={["-", "+"]}
          noRecordsFoundLabel="Brak rezerwacji"
        />
      </section>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardUserReservationTable);
