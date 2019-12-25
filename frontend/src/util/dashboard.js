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

// export const getRoomInformation = roomSymbol =>
//   fetch(GRAPHCMS_API, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       query: `query { roomInformations { symbol information {html} } }`
//     })
//   })
//     .then(response => response.json())
//     .then(data => {
//       let informations = "";
//       data.data.roomInformations.forEach(room => {
//         if (room.symbol === roomSymbol) {
//           informations = room.information.html;
//         }
//       });
//       return informations;
//     });
