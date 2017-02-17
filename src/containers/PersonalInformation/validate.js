import moment from 'moment';


const validate = (values) => {
    const errors = {};
    let ssn = "";
    let phoneno = "";
    let birthMonth = -1;
    let birthDay = -1;
    const birthYear = 1981; // should come from store

    if (!values.firstName || !/^[a-zA-Z'-]{2,25}$/g.test(values.firstName)) {
        errors.firstName = "First Name can have minimum of 2 and maximum of 25 characters with apostrophe and hyphen as only allowable characters";
    }
    if (!values.lastName || !/^[a-zA-Z'-]{2,30}$/g.test(values.lastName)) {
        errors.lastName = "Last Name can have minimum of 2 and maximum of 30 characters with apostrophe and hyphen as only allowable characters";
    }
    if (values.middleName !== "" && !/^[a-zA-Z]{1,10}$/g.test(values.middleName)) {
        errors.middleName = "Middle can only have upto 10 chacters with no special characters";
    }
    // if (!values.ssnFirst || !/^(?!666|000|9\d{2})\d{3}$/g.test(values.ssnFirst)) {
    //     errors.ssnThird = "Please enter a valid SSN";
    // }
    // if (!values.ssnSecond || !/^(?!00)\d{2}$/g.test(values.ssnSecond)) {
    //     errors.ssnThird = "Please enter a valid SSN";
    // }
    // if (!values.ssnThird || !/^(?!0{4})\d{4}$/g.test(values.ssnThird)) {
    //     errors.ssnThird = "Please enter a valid SSN";
    // }
    if (values.ssnFirst && values.ssnFirst.length === 3 && values.ssnSecond && values.ssnSecond.length === 2 && values.ssnThird && values.ssnThird.length === 4) {
        ssn = values.ssnFirst + values.ssnSecond + values.ssnThird;
        if (!/^(?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4}$/g.test(ssn) || /^(\d)\1{8}$/g.test(ssn)) {
            errors.ssnThird = "Please enter a valid SSN";
        }
    }
    if (!values.month || !values.day) {
        errors.day = "Please enter a valid Date";
    }
    if (values.day && (values.day > 31 || values.day < 1)) {
        errors.day = "Please enter a valid Date";
    }
    if (values.month && values.month !== undefined && values.day) {
        birthMonth = parseInt(values.month, 10) + 1;
        (parseInt(birthMonth, 10) < 10 && birthMonth.toString().length === 1) && (birthMonth = '0' + birthMonth);
        birthDay = parseInt(values.day, 10);
        let DOB = birthDay + '-' + birthMonth + '-' + birthYear;
        let isValidDate = moment(DOB.toString(), 'DD-MM-YYYY', true).isValid();
        !isValidDate && (errors.day = "Please enter a valid Date");
    }

    // fire validations only if the country type is non us
    if ((values.isUSCitizen === "false") && !values.citizenCtry || values.citizenCtry == "-1") {
        errors.citizenCtry = "Please select a Country of Citizenship";
    }
    // fire validations only if the country type is non us
    if ((values.isUSCitizen === "false") && !values.taxCountry || values.taxCountry == "-1") {
        errors.taxCountry = "Please select a Country of Tax Residence";
    }
    if (values.phoneFirst && values.phoneFirst.length === 3 && values.phoneSecond && values.phoneSecond.length === 3 && values.phoneThird && values.phoneThird.length === 4) {
        phoneno = (values.phoneFirst + values.phoneSecond + values.phoneThird).toString();
        if (/^(\d)\1{9}$/g.test(phoneno)) {
            errors.phoneThird = "Please enter a valid Phone Number";
        }
    }
    if (!values.email || !/^(?=.{6,80}$)([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+$/g.test(values.email)) {
        errors.email = "Please enter a valid email address";
    }
    return errors;
}

export default validate;