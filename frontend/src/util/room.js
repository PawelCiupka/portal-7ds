export const getAllFloors = () =>
  fetch("/api/room/get-all-floors", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

export const getAllRoomNumbers = () =>
  fetch("/api/room/get-all-roomNumbers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
