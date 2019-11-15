import { getAllUserRoles } from "../util/helper";

export const getUserRoles = async () => {
  const result = await getAllUserRoles();
  return result;
};

export const getUserRolesToSelectFormGroup = async () => {
  const result = await getAllUserRoles();
  const newResult = result.map((data, index) => {
    return { key: String(index), value: data._id, text: data.text };
  });
  return newResult;
};
