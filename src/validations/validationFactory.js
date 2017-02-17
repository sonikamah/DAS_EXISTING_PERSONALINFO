export const required = (value) => {
  return !!value ? true : false;
}
export const minLengthCheck = (value, minLength) => {
  return value.length >= minLength;
}
export const maxLengthCheck = (value, maxLength) => {
  return value.length<=maxLength;
}


export const emailCheck = (value) => {
  return /^(?!_)\w+@[a-zA-Z0-9]+?\.[a-zA-Z]{2,3}$/g.test(value);
}