import React from "react";
import { Table, Button } from "react-bootstrap";
import {
  getNewTickets,
  getAmountOfNewTickets,
  markTicketAsDone
} from "../../util/ticket";
import { formatDate } from "../../helpers/dateFormatter";

class TicketsTable extends React.Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      limitAmount: 5,
      skippedTickets: 0,
      skippedDifference: 5
    };

    this.increaseSkipAmount = this.increaseSkipAmount.bind(this);
    this.decreaseSkipAmount = this.decreaseSkipAmount.bind(this);
    this.markTicketAsDone = this.markTicketAsDone.bind(this);
    this.updateTickets = this.updateTickets.bind(this);
  }

  componentWillMount = () => {
    getNewTickets(this.state.limitAmount, this.state.skippedTickets).then(
      data => {
        this.setState({ tickets: data });
      }
    );
  };

  increaseSkipAmount = async () => {
    const amount = await getAmountOfNewTickets();
    if (
      this.state.skippedTickets - this.state.limitAmount <
      amount - this.state.skippedDifference - this.state.limitAmount
    ) {
      await this.setState({
        skippedTickets: this.state.skippedTickets + this.state.skippedDifference
      });
      this.updateTickets();
    }
  };
  decreaseSkipAmount = async () => {
    if (this.state.skippedTickets >= 1) {
      await this.setState({
        skippedTickets: this.state.skippedTickets - this.state.skippedDifference
      });
    }
    this.updateTickets();
  };
  updateTickets = async () => {
    await getNewTickets(this.state.limitAmount, this.state.skippedTickets).then(
      data => {
        this.setState({ tickets: data });
      }
    );
  };

  markTicketAsDone = async ticketId => {
    await markTicketAsDone(ticketId);
    this.updateTickets();
  };

  render() {
    return (
      <>
        <h3>Zgłoszenia</h3>
        <Table responsive size="sm">
          <thead>
            <tr>
              <th>Użytkownik</th>
              <th>Wiadomość</th>
              <th>Data dodania</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tickets !== [] &&
              this.state.tickets.map((ticket, index) => (
                <tr key={index}>
                  <th> {ticket.userInfo} </th>
                  <th>{ticket.message}</th>
                  <th>{formatDate(ticket.createdAt)}</th>
                  <th>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => this.markTicketAsDone(ticket._id)}
                    >
                      Zrobione
                    </Button>
                  </th>
                </tr>
              ))}
          </tbody>
        </Table>

        <Button onClick={this.decreaseSkipAmount}>-</Button>
        <Button onClick={this.increaseSkipAmount}>+</Button>
        <Button onClick={this.updateTickets}>Odśwież</Button>
      </>
    );
  }
}

export default TicketsTable;
