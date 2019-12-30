export const sendMailToRM = async data =>
  fetch("/api/mail/send/to/rm", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });

export const sendMailToInternet = async data =>
  fetch("/api/mail/send/to/internet", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });

export const sendMailToDormAdministration = async data =>
  fetch("/api/mail/send/to/dorm-administration", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });
