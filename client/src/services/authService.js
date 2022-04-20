export const registerUserServices = (formValue) => {
  return { status: true };
};

export const loginUserServices = (formValue) => {
  if (formValue.emailValue === "tuan" && formValue.passwordValue === "tuan") {
    return { status: true };
  }
  return { status: false };
};
