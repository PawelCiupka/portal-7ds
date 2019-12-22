import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import {
  getAllNewTickets,
  markTicketAsDone,
  getAmountOfNewTickets
} from "../../util/ticket";
import { formatDate } from "../../helpers/dateHelper";
import { Icon } from "semantic-ui-react";

const AdministrationTicketsTable = () => {
  const [isActionDone, setIsActionDone] = useState(true);
  const [data, setData] = useState({ columns: [], rows: [] });

  useEffect(() => {
    updateTickets();
  }, []);

  useEffect(() => {
    const doUpdateData = async () => {
      if (isActionDone === true) {
        if (data.rows.length === (await getAmountOfNewTickets())) {
          setIsActionDone(false);
          updateTickets();
        }
      }
    };

    doUpdateData();
  });

  const updateTickets = async () => {
    await getAllNewTickets().then(data => {
      updateData(data);
    });
  };

  const updateData = tickets => {
    let result = {
      columns: [
        { label: "Użytkownik", field: "user", sort: "asc" },
        { label: "Wiadomość", field: "msg", sort: "asc" },
        { label: "Data", field: "createdAt", sort: "asc" },
        { label: "Akcja", field: "action", sort: "asc" }
      ],
      rows: []
    };

    tickets.forEach(ticket => {
      const t = {
        user: ticket.userInfo,
        msg: ticket.message,
        createdAt: formatDate(ticket.createdAt),
        action: (
          <Button
            variant="success"
            size="sm"
            onClick={() => markTicket(ticket._id)}
          >
            <Icon name="check" />
          </Button>
        )
      };
      result.rows.push(t);
    });

    setData(result);
  };

  const markTicket = async ticketId => {
    await markTicketAsDone(ticketId);
    await setIsActionDone(true);
    await updateTickets();
  };

  return (
    <>
      <section>
        <h5>Zgłoszenia</h5>
        <MDBDataTable
          bordered
          responsive
          striped
          small
          hover
          data={data}
          entriesLabel="Pokaż wpisy"
          paginationLabel={["-", "+"]}
          searchLabel="Szukaj"
          infoLabel={["Wyświetlanie", "do", "z", "wpisów"]}
          noRecordsFoundLabel="Nie znaleziono wpisów"
          className="administration-table"
        />
      </section>
    </>
  );
};

export default AdministrationTicketsTable;
