import { GRAPHCMS_API } from "../helpers/appVariable";

export const getRegulations = regulationSymbol =>
  fetch(GRAPHCMS_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query { regulations(where: {symbol: "${regulationSymbol}"}) { symbol title content {html} } }`
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
        result = data.data.regulations[0];
      }

      return result;
    });
