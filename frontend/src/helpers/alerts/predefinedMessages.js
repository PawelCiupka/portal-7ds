// PL
export const TICKET = {
  success: {
    change_room: "Wysłano prośbę o zmianę pokoju"
  },
  error: {
    change_room: "Coś poszło nie tak"
  }
};

export const USER = {
  success: {
    update_information: "Dane osobowe zostały zmienione",
    update_security: "Hasło zostało zmienione"
  },
  error: {
    update_information: "Nie udało się zmienić danych osobowych",
    update_security: "Nie udało się zmienić hasła"
  }
};

export const MANAGEMENT = {
  success: {
    update_user: "Dane użytkownika zostały zmienione"
  },
  error: {
    update_user: "Nie udało zmienić się danych użytkownika"
  }
};

export const ROOM_RESERVATION = {
  success: {
    reserve_room: "Zarezerwowano salkę",
    cancel_reservation: "Anulowano rezerwację salki"
  },
  error: {
    reserve_room: "Nie udało się zarezerwować salki",
    cancel_reservation: "Nie udało się anulować rezerwacji salki",
    permission: "Nie masz uprawnień do rezerwacji tej salki",
    limit_reservation_day: "Osiągnięto limit rezerwacji salki w wybranym dniu",
    limit_reservation_week: "Osiągnięto limit rezerwacji salki"
  }
};
