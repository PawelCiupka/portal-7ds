export const sendChangeRoomTicket = data =>
  fetch("/api/ticket/new/room-change", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });

export const getNewTickets = (limitAmount, skipAmount) =>
  fetch("/api/ticket/get-new-tickets", {
    method: "POST",
    body: JSON.stringify({
      limitAmount: limitAmount,
      skipAmount: skipAmount
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

export const getAmountOfNewTickets = () =>
  fetch("/api/ticket/get-all-new-tickets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data.length;
    });

export const markTicketAsDone = ticketId => {
  fetch("/api/ticket/mark-ticket-as-done", {
    method: "POST",
    body: JSON.stringify({
      id: ticketId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });
};
