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
export const ROOM_HOUR_TEMPLATE = {
  Gym: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  Billiards:["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
  Tv: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
  Fitness: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  PingPong: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
};