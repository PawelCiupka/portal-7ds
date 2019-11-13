import { getAllFloors, getAllRoomNumbers } from "../util/room";

export const floors = async () => {
  const result = await getAllFloors();
  return result;
};

export const roomNumbers = async () => {
  const result = await getAllRoomNumbers();
  return result;
};

export const getFloorFromRoom = room => {
  if (String(room).length === 3) {
    return String(room).slice(0, -1);
  }
  return String(room).slice(0, -2);
};

export const getRoomNumberFromRoom = room => {
  return String(room).slice(-2);
};

export const floorsOptions = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
  { key: "8", text: "8", value: "8" },
  { key: "9", text: "9", value: "9" },
  { key: "10", text: "10", value: "10" },
  { key: "11", text: "11", value: "11" },
  { key: "12", text: "12", value: "12" },
  { key: "13", text: "13", value: "13" },
  { key: "14", text: "14", value: "14" },
  { key: "15", text: "15", value: "15" },
  { key: "16", text: "16", value: "16" }
];

export const roomNmbOptions = [
  { key: "3", text: "3", value: "03" },
  { key: "4", text: "4", value: "04" },
  { key: "5", text: "5", value: "05" },
  { key: "6", text: "6", value: "06" },
  { key: "7", text: "7", value: "07" },
  { key: "8", text: "8", value: "08" },
  { key: "9", text: "9", value: "09" },
  { key: "10", text: "10", value: "10" },
  { key: "11", text: "11", value: "11" },
  { key: "12", text: "12", value: "12" },
  { key: "13", text: "13", value: "13" },
  { key: "14", text: "14", value: "14" },
  { key: "15", text: "15", value: "15" },
  { key: "16", text: "16", value: "16" }
];
