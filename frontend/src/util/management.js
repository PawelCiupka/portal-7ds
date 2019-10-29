export const getUnvefiriedUsers = (limitAmount, skipAmount) =>
    fetch("/api/management/get-unverified-users", {
        method: "POST",
        body: JSON.stringify(
            {
                "limitAmount": limitAmount,
                "skipAmount": skipAmount
            }),
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