export const getRoomTimetable = async roomSymbol =>
  await fetch("/api/room/get/room-timetable", {
    method: "POST",
    body: JSON.stringify({
      roomSymbol: roomSymbol
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

export const reserveRoom = async (hourId, userId) =>
  await fetch("/api/room/reserve-hour", {
    method: "POST",
    body: JSON.stringify({
      hourId: hourId,
      userId: userId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });
