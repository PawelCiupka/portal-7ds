export const ROOM_CODE = {
  Gym: "G",
  Billiards: "B",
  Tv: "T",
  Fitness: "F",
  PingPong: "P"
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
