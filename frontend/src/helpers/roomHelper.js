import { getAllFloors, getAllRoomNumbers } from "../util/room";

export const getFloors = async () => {
  const result = await getAllFloors();
  return result;
};

export const getRoomNumbers = async () => {
  const result = await getAllRoomNumbers();
  return result;
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
