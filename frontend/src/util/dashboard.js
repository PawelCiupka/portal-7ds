import { GRAPHCMS_API } from "../helpers/roomPredefineValues";

export const getListOfInformation = () =>
  fetch(GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query { dashboardInformations { symbol title content {html} } }`
    })
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

export const getAllUserReservations = async userId =>
  await fetch("/api/room/get/user-reservations", {
    method: "POST",
    body: JSON.stringify({
      userId: userId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

export const getAmountOfUserReservations = async userId =>
  await fetch("/api/room/get/user-reservations", {
    method: "POST",
    data: JSON.stringify({
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
