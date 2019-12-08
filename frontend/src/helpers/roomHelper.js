import { getAllFloors, getAllRoomNumbers } from "../util/helper";

export const getFloors = async () => {
  const result = await getAllFloors();
  return result;
};

export const getFloorsToSelectFormGroup = async () => {
  const result = await getAllFloors();
  let newResult = result.map((data, index) => {
    return { key: String(index), value: data.number, text: data.number };
  });
  return newResult;
};

export const getFloorsWithDefaultToSelectFormGroup = async () => {
  const result = await getAllFloors();
  let newResult = result.map((data, index) => {
    return { key: String(index + 1), value: data.number, text: data.number };
  });
  await newResult.unshift({ key: "0", value: "0", text: "Piętro" });
  return newResult;
};

export const getRoomNumbers = async () => {
  const result = await getAllRoomNumbers();
  return result;
};

export const getRoomNumbersToSelectFormGroup = async () => {
  const result = await getAllRoomNumbers();
  let newResult = result.map((data, index) => {
    return { key: String(index), value: data.number, text: data.number };
  });
  return newResult;
};

export const getRoomNumbersWithDefaultToSelectFormGroup = async () => {
  const result = await getAllRoomNumbers();
  let newResult = result.map((data, index) => {
    return { key: String(index + 1), value: data.number, text: data.number };
  });
  await newResult.unshift({ key: "0", value: "00", text: "Pokój" });
  return newResult;
};

export const getFloorFromRoom = room => {
  if (String(room).length === 3) {
    return String(room).slice(0, 1);
  }
  return String(room).slice(0, 2);
};

export const getRoomNumberFromRoom = room => {
  return String(room).slice(-2);
};
