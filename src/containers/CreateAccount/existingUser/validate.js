import * as validationFactory from '../../../validations/validationFactory';
const validate = (values) => {
  const errors = {};
  if (!validationFactory.required(values.userName) || !validationFactory.minLengthCheck(values.userName, 3)) {
    errors.userName = "user Name is required";
  }
  if (!validationFactory.required(values.password)) {
    errors.password = "Password is required";
  }
  return errors;
}
export default validate;