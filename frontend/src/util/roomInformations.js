import { GRAPHCMS_API } from "../helpers/roomPredefineValues";

export const getRoomInformation = roomSymbol =>
  fetch(GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query { roomInformations { symbol information {html} } }`
    })
  })
    .then(response => response.json())
    .then(data => {
      let informations = "";
      data.data.roomInformations.forEach(room => {
        if (room.symbol === roomSymbol) {
          informations = room.information.html;
        }
      });
      return informations;
    });