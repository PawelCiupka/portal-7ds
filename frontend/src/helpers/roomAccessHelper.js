export const isGymAvailable = accessText => {
  return String(accessText).includes("G");
};

export const isBilliardsAvailable = accessText => {
  return String(accessText).includes("B");
};

export const isTVAvailable = accessText => {
  return String(accessText).includes("T");
};

export const isFitnessAvailable = accessText => {
  return String(accessText).includes("F");
};

export const isPingPongAvailable = accessText => {
  return String(accessText).includes("P");
};
