export const sendChangeRoomTicket = data =>
  fetch("/api/ticket/new/change-room", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.status === 200) {
      alert("ok");
      return response;
    } else {
      return response;
    }
  });
