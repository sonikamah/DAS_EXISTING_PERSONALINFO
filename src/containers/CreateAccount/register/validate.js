const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "required";
  }
  if (!values.lastName) {
    errors.lastName = "required";
  }
  return errors;
}

export default validate;