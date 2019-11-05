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
