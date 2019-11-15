import { getAllUserStatuses } from "../util/helper";

export const getUserStatuses = async () => {
  const result = await getAllUserStatuses();
  return result;
};

export const getUserStatusesToSelectFormGroup = async () => {
  const result = await getAllUserStatuses();
  const newResult = result.map((data, index) => {
    return { key: String(index), value: data._id, text: data.text };
  });
  return newResult;
};
