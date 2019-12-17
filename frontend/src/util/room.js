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

export const getNumberOfReservedRoomsByUserWeek = async (roomSymbol, userId) =>
  await fetch("/api/room/get/reserved-hours-by-user-week", {
    method: "POST",
    body: JSON.stringify({
      roomSymbol: roomSymbol,
      userId: userId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data.length;
    });

export const getNumberOfReservedRoomsByUserDay = async (
  roomSymbol,
  hourId,
  userId
) =>
  await fetch("/api/room/get/reserved-hours-by-user-day", {
    method: "POST",
    body: JSON.stringify({
      roomSymbol: roomSymbol,
      hourId: hourId,
      userId: userId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data.length;
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

export const cancelReservation = async hourId =>
  await fetch("/api/room/cancel-reservation", {
    method: "POST",
    body: JSON.stringify({
      hourId: hourId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });

export const getHourDetails = async hourId =>
  await fetch("/api/room/get/hour-details", {
    method: "POST",
    body: JSON.stringify({
      hourId: hourId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });
