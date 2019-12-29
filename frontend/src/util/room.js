import { GRAPHCMS_API } from "../helpers/appVariable";

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

export const getRoomDetails = async roomSymbol =>
  await fetch("/api/room/get/room-details", {
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

export const getRoomName = async roomSymbol =>
  await fetch("/api/room/get/room-name", {
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

export const getRoomHoursTemplate = async roomSymbol =>
  await fetch("/api/room/get/hours-template", {
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

export const getRoomDailyReservationLimit = async roomSymbol =>
  await fetch("/api/room/room-daily-reservation-limit", {
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

export const getRoomWeeklyReservationLimit = async roomSymbol =>
  await fetch("/api/room/room-weekly-reservation-limit", {
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

export const getRoomInformation = roomSymbol =>
  fetch(GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query { roomInformations(where: {symbol: "${roomSymbol}"}) { symbol content {html} } }`
    })
  })
    .then(response => response.json())
    .then(data => {
      let result = {
        symbol: "",
        content: { html: "" }
      };

      if (typeof data.data !== "undefined") {
        result = data.data.roomInformations[0];
      }

      return result;
    });
