export const signupValidator = (values) => {
  const errors = {};
  if (!values.firstname) {
    errors.name = "First Name is required";
  } else if (values.firstname.length < 5 || values.firstname.length > 15) {
    errors.firstname = "First Name must be 15 characters or less";
  }

  if (!values.lastname) {
    errors.lastname = "Last Name is required";
  } else if (values.lastname.length < 5 || values.lastname.length > 15) {
    errors.lastname = "Last Name must be 15 characters or less";
  }

  // Check Email Validity
  if (!values.email.trim()) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Check Message Validity
  if (!values.password.trim()) {
    errors.password = "Password cannot be empty";
  } else if (values.password.trim().length < 6) {
    errors.password = "Password should contain at least 10 characters";
  }

  // if (!values.referral.trim()) {
  //   errors.referral = "Message cannot be empty";
  // } else if (values.referral.trim().length < 10) {
  //   errors.referral = "Message should contain at least 10 characters";
  // }
  return errors;
};

export const loginValidator = (values) => {
  const errors = {};
  // Check Email Validity
  if (!values.email.trim()) {
    errors.email = "Email is Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // Check Message Validity
  if (!values.password.trim()) {
    errors.password = "Password cannot be empty";
  } else if (values.password.trim().length < 2) {
    errors.password = "Password should contain at least 10 characters";
  }
  return errors;
};
