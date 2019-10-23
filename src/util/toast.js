let toastRef;

function setToast(ref) {
  toastRef = ref;
}

function show(message, duration) {
  toastRef.show(message, duration);
}

export default {
  show,
  setToast,
};
