const userNameOrEmailValidation = (value) => {
  let err;
  if (!value) err = "User name or email is required";
  return err;
};

const fullNameValidaton = (value) => {
  let err;
  if (!value) err = "Full name is required";
  return err;
};

const userNameValidaton = (value) => {
  let err;
  if (!value) err = "User name is required";
  return err;
};

const emailValidation = (value) => {
  let err;
  if (!value) err = "Email is required";
  else if (!value.search("@")) err = "Type email is required";
  return err;
};

const passwordValidtaion = (value) => {
  let err;
  if (!value) err = "Password is required";
  else if (value.length < 6) err = "Password must be at least 6 characters";
  return err;
};

export { userNameOrEmailValidation, passwordValidtaion,fullNameValidaton,userNameValidaton,emailValidation };
