export const checkValidationData = (
  email,
  password,
  name = null,
  retypePassword = null,
  isSignInForm
) => {
  const isEmailValid =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      email
    );

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Incorrect Gmail";
  if (!isPasswordValid)
    return "Incorrect Password (Must include A-Z, a-z, 0-9, and a special symbol, 8+ chars.)";

  if (!isSignInForm) {
    const isNameValid = /^[A-Za-z]+(?: [A-Za-z]+)*$/.test(name);
    if (!isNameValid) return "Please enter a valid name using letters only.";

    if (password !== retypePassword)
      return "Password doesn't match. Please try again.";
  }

  return null;
};
