export const ROOM_CODE = {
  Gym: "G",
  Billiards: "B",
  Tv: "T",
  Fitness: "F",
  PingPong: "P"
};

export const ROOM_RESERVATION_LIMIT = {
  Gym: {
    week: 2,
    day: 1
  },
  Billiards: {
    week: 4,
    day: 2
  },
  Tv: {
    week: 3,
    day: 1
  },
  Fitness: {
    week: 3,
    day: 1
  },
  PingPong: {
    week: 2,
    day: 1
  },
};

export const ROOM_HOUR_TEMPLATE = {
  Gym: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  Billiards:["12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
  Tv: ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"],
  Fitness: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  PingPong: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
};

export const getRoomAccessCode = (
  isGym,
  isBilliards,
  isTV,
  isFitness,
  isPingPong
) => {
  let code = "";

  if (isGym) {
    code += ROOM_CODE.Gym;
  }
  if (isBilliards) {
    code += ROOM_CODE.Billiards;
  }
  if (isTV) {
    code += ROOM_CODE.Tv;
  }
  if (isFitness) {
    code += ROOM_CODE.Fitness;
  }
  if (isPingPong) {
    code += ROOM_CODE.PingPong;
  }

  return code;
};

export const isGymAvailable = accessText => {
  return String(accessText).includes(ROOM_CODE.Gym);
};

export const isBilliardsAvailable = accessText => {
  return String(accessText).includes(ROOM_CODE.Billiards);
};

export const isTVAvailable = accessText => {
  return String(accessText).includes(ROOM_CODE.Tv);
};

export const isFitnessAvailable = accessText => {
  return String(accessText).includes(ROOM_CODE.Fitness);
};

export const isPingPongAvailable = accessText => {
  return String(accessText).includes(ROOM_CODE.PingPong);
};
