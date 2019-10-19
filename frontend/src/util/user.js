export const updateInformation = user =>
  fetch("/api/users/update/information", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });