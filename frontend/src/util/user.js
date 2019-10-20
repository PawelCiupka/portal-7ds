export const updateInformation = user =>
  fetch("/api/users/update/information", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.status === 200) {
      alert("ok");
      return response;
    } else {
      return response;
    }
  });

  export const updateSecurity = user =>
  fetch("/api/users/update/security", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    if (response.status === 200) {
      alert("ok");
      return response;
    } else {
      return response;
    }
  });
