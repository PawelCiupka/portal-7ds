import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import { Icon } from "semantic-ui-react";
import {
  getAllUsers,
  getAmountOfAllUsers,
  getUserById
} from "../../util/management";
import AdministrationUserDetailsModal from "./userDetailsModal";

const AdministrationUnverifiedUsersTable = () => {
  const [isActionDone, setIsActionDone] = useState(true);
  const [data, setData] = useState({ columns: [], rows: [] });
  const [detailedUser, setDetailedUser] = useState(null);
  const [showUserDetails, setShowUserDetails] = useState(false);

  useEffect(() => {
    updateUsers();
  }, []);

  useEffect(() => {
    const doUpdateData = async () => {
      if (isActionDone === true) {
        if (data.rows.length === (await getAmountOfAllUsers())) {
          setIsActionDone(false);
          updateUsers();
        }
      }
    };

    doUpdateData();
  });

  const updateUsers = async () => {
    await getAllUsers().then(data => {
      updateData(data);
    });
  };

  const updateData = users => {
    let result = {
      columns: [
        { label: "Nazwa użytkownika", field: "username", sort: "asc" },
        { label: "Imię i nazwisko", field: "userInfo", sort: "asc" },
        { label: "Pokój", field: "room", sort: "asc" },
        { label: "Komentarz", field: "comment", sort: "asc" },
        { label: "Akcja", field: "action", sort: "asc" }
      ],
      rows: []
    };

    users.forEach(user => {
      const u = {
        username: user.username,
        userInfo: user.firstname + " " + user.lastname,
        room: user.room,
        comment: user.comment === "" ? " " : user.comment,
        action: (
          <Button
            variant="success"
            size="sm"
            onClick={() => editUser(user._id)}
          >
            <Icon name="pencil alternate" />
          </Button>
        )
      };
      result.rows.push(u);
    });

    setData(result);
  };

  const editUser = async userId => {
    const user = await getUserById(userId);
    await setShowUserDetails(false);
    await setDetailedUser(user);
    await setShowUserDetails(true);
    updateUsers();
  };

  return (
    <>
      {showUserDetails ? (
        <AdministrationUserDetailsModal user={detailedUser} />
      ) : null}
      <h3>Zarządanie użytkownikami</h3>
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
    </>
  );
};

export default AdministrationUnverifiedUsersTable;
