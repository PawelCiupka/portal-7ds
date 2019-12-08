import React from "react";
import { Button } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import {
  getAllNewTickets,
  markTicketAsDone
} from "../../util/ticket";
import { formatDate } from "../../helpers/dateHelper";
import { FaCheck } from "react-icons/fa";

class AdministrationTicketsTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isActionDone: false
    };

    this.markTicketAsDone = this.markTicketAsDone.bind(this);
  }

  componentWillMount = () => {
    this.updateTickets();
  };

  updateTickets = () => {
    getAllNewTickets().then(data => {
      this.updateData(data);
    });
  };

  updateData = tickets => {
    let result = {
      columns: [
        { label: "Użytkownik", field: "user", sort: "asc" },
        { label: "Wiadomość", field: "msg", sort: "asc" },
        { label: "Data", field: "createdAt", sort: "asc" },
        { label: "Akcja", field: "action", sort: "asc" }
      ],
      rows: []
    };

    result.rows = this.prepareTickets(tickets);
    this.setState({ data: result });
  };

  prepareTickets = tickets => {
    let result = [];
    tickets.forEach(ticket => {
      const t = {
        user: ticket.userInfo,
        msg: ticket.message,
        createdAt: formatDate(ticket.createdAt),
        action: (
          <Button
            variant="success"
            size="sm"
            onClick={() => this.markTicketAsDone(ticket._id)}
          >
            <FaCheck />
          </Button>
        )
      };
      result.push(t);
    });
    return result;
  };

  markTicketAsDone = async ticketId => {
    await markTicketAsDone(ticketId);
    this.setState({ isActionDone: true });
    this.updateTickets();
  };

  render() {
    return (
      <>
        <h3>Zgłoszenia</h3>
        <MDBDataTable
          bordered
          responsive
          striped
          small
          hover
          data={this.state.data}
          entriesLabel="Pokaż wpisy"
          paginationLabel={["-", "+"]}
          searchLabel="Szukaj"
          infoLabel={["Wyświetlanie", "do", "z", "wpisów"]}
        />
      </>
    );
  }
}

export default AdministrationTicketsTable;
