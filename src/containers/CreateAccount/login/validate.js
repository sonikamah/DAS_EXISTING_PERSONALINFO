const validate = (values) => {
  const errors = {};
  if (!values.userName) {
    errors.userName = "User Name is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
export default validate;