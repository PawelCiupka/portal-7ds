export const getAllUnvefiriedUsers = () =>
  fetch("/api/management/get-all-unverified-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

export const getAmountOfUnvefiriedUsers = () =>
  fetch("/api/management/get-all-unverified-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data.length;
    });

export const acceptUnverifiedUser = userId =>
  fetch("/api/management/accept-unverified-user", {
    method: "POST",
    body: JSON.stringify({
      id: userId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });

export const rejectUnverifiedUser = userId =>
  fetch("/api/management/reject-unverified-user", {
    method: "POST",
    body: JSON.stringify({
      id: userId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });

export const getAllUsers = () =>
  fetch("/api/management/get-all-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

export const getAmountOfAllUsers = () =>
  fetch("/api/management/get-all-users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data.length;
    });

export const getUserById = id =>
  fetch("/api/users/get-by-id", {
    method: "POST",
    body: JSON.stringify({
      id: id
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .then(data => {
      return data;
    });

export const updateUser = user =>
  fetch("/api/management/update-user", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
    return response;
  });
