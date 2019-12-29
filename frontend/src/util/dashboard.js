import { GRAPHCMS_API } from "../helpers/appVariable";

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
      let result = {
        symbol: "",
        title: "",
        content: { html: "" }
      };

      if (typeof data.data !== "undefined") {
        result = data.data.dashboardInformations;
      }

      return result;
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

export const getAllRMPosts = () =>
  fetch(GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query { rMPosts { title content {html} createdAt } }`
    })
  })
    .then(response => response.json())
    .then(data => {
      let result = {
        title: "",
        content: { html: "" },
        createdAt: ""
      };

      if (typeof data.data !== "undefined") {
        result = data.data.rMPosts;
      }

      return result;
    });

export const getAllAdministrationPosts = () =>
  fetch(GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query { administrationPosts { title content {html} createdAt } }`
    })
  })
    .then(response => response.json())
    .then(data => {
      let result = {
        title: "",
        content: { html: "" },
        createdAt: ""
      };

      if (typeof data.data !== "undefined") {
        result = data.data.administrationPosts;
      }

      return result;
    });
