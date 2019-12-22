import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { MDBDataTable } from "mdbreact";
import { Icon } from "semantic-ui-react";
import {
  getAllUnvefiriedUsers,
  getAmountOfUnvefiriedUsers,
  acceptUnverifiedUser,
  rejectUnverifiedUser
} from "../../util/management";
import { formatDate } from "../../helpers/dateHelper";

const AdministrationUnverifiedUsersTable = () => {
  const [isActionDone, setIsActionDone] = useState(true);
  const [data, setData] = useState({ columns: [], rows: [] });

  useEffect(() => {
    updateUsers();
  }, []);

  useEffect(() => {
    const doUpdateData = async () => {
      if (isActionDone === true) {
        if (data.rows.length === (await getAmountOfUnvefiriedUsers())) {
          setIsActionDone(false);
          updateUsers();
        }
      }
    };

    doUpdateData();
  });

  const updateUsers = async () => {
    await getAllUnvefiriedUsers().then(data => {
      updateData(data);
    });
  };

  const updateData = users => {
    let result = {
      columns: [
        { label: "Nazwa użytkownika", field: "username", sort: "asc" },
        { label: "Imię i nazwisko", field: "userInfo", sort: "asc" },
        { label: "Pokój", field: "room", sort: "asc" },
        { label: "Data dodania", field: "createdAt", sort: "asc" },
        { label: "", field: "action", sort: "asc" }
      ],
      rows: []
    };

    users.forEach(user => {
      const u = {
        username: user.username,
        userInfo: user.firstname + " " + user.lastname,
        room: user.room,
        createdAt: formatDate(user.createdAt),
        action: (
          <div className="flex-separate">
            <Button
              variant="success"
              size="sm"
              onClick={() => acceptUser(user._id)}
            >
              <Icon name="check" />
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={() => rejectUser(user._id)}
            >
              <Icon name="times" />
            </Button>
          </div>
        )
      };
      result.rows.push(u);
    });

    setData(result);
  };

  const acceptUser = async userId => {
    await acceptUnverifiedUser(userId);
    await setIsActionDone(true);
    updateUsers();
  };

  const rejectUser = async userId => {
    await rejectUnverifiedUser(userId);
    await setIsActionDone(true);
    updateUsers();
  };

  return (
    <>
      <section className="administration-section">
        <h5>Użytkownicy oczekujący na potwierdzenie</h5>
        <MDBDataTable
          bordered
          responsive
          striped
          hover
          data={data}
          entriesLabel="Pokaż wpisy"
          paginationLabel={["-", "+"]}
          searchLabel="Szukaj"
          infoLabel={["Wyświetlanie", "do", "z", "wpisów"]}
          noRecordsFoundLabel="Nie znaleziono wpisów"
        />
      </section>
    </>
  );
};

export default AdministrationUnverifiedUsersTable;
