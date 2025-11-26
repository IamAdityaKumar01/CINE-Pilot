export const checkValidationData = (email, password, name, retypePassword) => {
  const isEmailValid =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      email
    );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
  const isRetypePasswordValid = password == retypePassword;
  if (isNameValid == false) {
    return "Please enter a valid name using letters only.";
  } else if (isEmailValid == false) {
    return "Incorrect Gmail";
  } else if (isPasswordValid == false) {
    return "Incorrect Password (“Must include: A-Z, a-z, 0-9, and one special symbol (#?!@$%^&*-), 8+ chars.”) ";
  } else if (isRetypePasswordValid == false) {
    return "Password doesn't match. Please try again.";
  } else {
    return null;
  }
};
