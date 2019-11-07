import React from "react";
import { Table, Button } from "react-bootstrap";
import {
  getUnvefiriedUsers,
  getAmountOfUnvefiriedUsers,
  acceptUnverifiedUser,
  rejectUnverifiedUser
} from "../../util/management";
import { formatDate } from "../../helpers/dateFormatter";

class UnverifiedUsersTable extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      limitAmount: 5,
      skippedUsers: 0,
      skippedDifference: 5
    };

    this.increaseSkipAmount = this.increaseSkipAmount.bind(this);
    this.decreaseSkipAmount = this.decreaseSkipAmount.bind(this);
    this.acceptUnverifiedUser = this.acceptUnverifiedUser.bind(this);
    this.rejectUnverifiedUser = this.rejectUnverifiedUser.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
  }

  componentWillMount = () => {
    getUnvefiriedUsers(this.state.limitAmount, this.state.skippedUsers).then(
      data => {
        this.setState({ users: data });
      }
    );
  };

  increaseSkipAmount = async () => {
    const amount = await getAmountOfUnvefiriedUsers();
    if (
      this.state.skippedUsers - this.state.limitAmount <
      amount - this.state.skippedDifference - this.state.limitAmount
    ) {
      await this.setState({
        skippedUsers: this.state.skippedUsers + this.state.skippedDifference
      });
      this.updateUsers();
    }
  };
  decreaseSkipAmount = async () => {
    if (this.state.skippedUsers >= 1) {
      await this.setState({
        skippedUsers: this.state.skippedUsers - this.state.skippedDifference
      });
    }
    this.updateUsers();
  };
  updateUsers = () => {
    getUnvefiriedUsers(this.state.limitAmount, this.state.skippedUsers).then(
      data => {
        this.setState({ users: data });
      }
    );
  };

  acceptUnverifiedUser = async userId => {
    await acceptUnverifiedUser(userId);
    this.updateUsers();
  };
  rejectUnverifiedUser = async userId => {
    await rejectUnverifiedUser(userId);
    this.updateUsers();
  };

  render() {
    return (
      <>
        <h3>Użytkownicy oczekujący na potwierdzenie</h3>
        <Table responsive size="sm">
          <thead>
            <tr>
              <th>Nazwa użytkownika</th>
              <th>Imię i nazwisko</th>
              <th>Pokój</th>
              <th>Data dodania</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users !== [] &&
              this.state.users.map((user, index) => (
                <tr key={index}>
                  <th>{user.username} </th>
                  <th>
                    {user.firstname} {user.lastname}
                  </th>
                  <th>{user.room}</th>
                  <th>{formatDate(user.createdAt)}</th>
                  <th>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => this.acceptUnverifiedUser(user._id)}
                    >
                      Akceptuj
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => this.rejectUnverifiedUser(user._id)}
                    >
                      Odrzuć
                    </Button>
                  </th>
                </tr>
              ))}
          </tbody>
        </Table>

        <Button onClick={this.decreaseSkipAmount}>-</Button>
        <Button onClick={this.increaseSkipAmount}>+</Button>
        <Button onClick={this.updateUsers}>Odśwież</Button>
      </>
    );
  }
}

export default UnverifiedUsersTable;
