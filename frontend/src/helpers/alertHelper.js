export const AddAlertIds = async () => {
  var modalBackDrop = await document.getElementsByClassName(
    "modal-backdrop"
  )[0];
  var modal = await document.getElementsByClassName("modal")[0];
  if (modalBackDrop != null) {
    modalBackDrop.setAttribute("id", "alert-modal-backdrop");
  }
  if (modal != null) {
    modal.setAttribute("id", "alert-modal");
  }
};

export const RemoveAlertIds = async () => {
  var modalBackDrop = await document.getElementsByClassName(
    "modal-backdrop"
  )[0];
  var modal = await document.getElementsByClassName("modal")[0];
  if (modalBackDrop != null) {
    modalBackDrop.setAttribute("id", " ");
  }
  if (modal != null) {
    modal.setAttribute("id", " ");
  }
};
