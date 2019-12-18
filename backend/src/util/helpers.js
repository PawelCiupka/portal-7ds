export const parseError = err => {
  if (err.isJoi) return err.details[0];
  return JSON.stringify(err, Object.getOwnPropertyNames(err));
};

export const sessionizeUser = user => {
  return {
    userId: user.id,
    username: user.username,
    firstname: user.firstname,
    lastname: user.lastname,
    room: user.room,
    email: user.email
  };
};

export const ROOM_CODE = {
  Gym: "G",
  Billiards: "B",
  Tv: "T",
  Fitness: "F",
  PingPong: "P"
};
