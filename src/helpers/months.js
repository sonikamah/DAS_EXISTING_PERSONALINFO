import moment from 'moment';

const getMonths = () => {
  var monthOptions = [];
  for (var i = 0; i < 12; i++) {
    monthOptions.push({ id: i, name: moment().month(i).format('MMMM') });
  }
  return monthOptions;
}

export default getMonths;