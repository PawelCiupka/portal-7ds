import React from "react";
import { Table, Button } from "react-bootstrap";
import { FaSyncAlt, FaPen } from "react-icons/fa";
import {
  getUsers,
  getAmountOfAllUsers,
  getUserById
} from "../../util/management";
import AdministrationUserDetailsModal from "./userDetailsModal";

class AdministrationUsersTable extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      limitAmount: 20,
      skippedUsers: 0,
      skippedDifference: 20,
      showUserDetails: false,
      detailedUser: null
    };

    this.increaseSkipAmount = this.increaseSkipAmount.bind(this);
    this.decreaseSkipAmount = this.decreaseSkipAmount.bind(this);
    this.editUser = this.editUser.bind(this);
    this.updateUsers = this.updateUsers.bind(this);
  }

  componentWillMount = () => {
    getUsers(this.state.limitAmount, this.state.skippedUsers).then(data => {
      this.setState({ users: data });
    });
  };

  increaseSkipAmount = async () => {
    const amount = await getAmountOfAllUsers();
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
    getUsers(this.state.limitAmount, this.state.skippedUsers).then(data => {
      this.setState({ users: data });
    });
  };

  editUser = async userId => {
    const user = await getUserById(userId);
    await this.setState({
      showUserDetails: false,
      detailedUser: user
    });
    await this.setState({
      showUserDetails: true
    });
  };

  render() {
    return (
      <>
        {this.state.showUserDetails ? (
          <AdministrationUserDetailsModal user={this.state.detailedUser} />
        ) : null}
        <h3>Zarządanie użytkownikami</h3>
        <Table responsive size="sm">
          <thead>
            <tr>
              <th>Nazwa użytkownika</th>
              <th>Imię i nazwisko</th>
              <th>Pokój</th>
              <th>Komentarz</th>
              <th></th>
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
                  <th>{user.comment}</th>
                  <th>
                    <Button
                      variant="success"
                      size="sm"
                      onClick={() => this.editUser(user._id)}
                    >
                      <FaPen />
                    </Button>
                  </th>
                </tr>
              ))}
          </tbody>
        </Table>

        <Button onClick={this.decreaseSkipAmount}>-</Button>
        <Button onClick={this.increaseSkipAmount}>+</Button>
        <Button onClick={this.updateUsers}>
          <FaSyncAlt />
        </Button>
      </>
    );
  }
}

export default AdministrationUsersTable;
