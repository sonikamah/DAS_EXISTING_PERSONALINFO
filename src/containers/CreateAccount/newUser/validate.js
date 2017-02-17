import * as validationFactory from '../../../validations/validationFactory';

const validate = (values) => {
  const errors = {};
  if (!validationFactory.required(values.firstName) || !/^[a-zA-Z'-]{3,25}$/g.test(values.firstName)) {
    errors.firstName = "First Name can have maximum of 25 characters with apostrophie and hyphen as only allowable characters";
  }
  if (!validationFactory.required(values.lastName) || !/^[a-zA-Z'-]{3,30}$/g.test(values.lastName)) {
    errors.lastName = "Last Name can have maximum of 30 characters with apostrophie and hyphen as only allowable characters";
  }
  if (values.middleName !== "" && !/^[a-zA-Z'-]{1,10}$/g.test(values.middleName)) {
    errors.middleName = "Middle can only have upto 10 chacters with no special characters";
  }
  if (!validationFactory.required(values.email) || !validationFactory.emailCheck(values.email) || !validationFactory.maxLengthCheck(values.email, 80) ) {
    errors.email = "Email id should be correct with maximum 80 characters and with no special characters other than (underscore) Eg: Johndoe@gmail.com"
  }
  return errors;
}

export default validate;