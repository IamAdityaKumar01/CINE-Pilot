export const checkValidationData = (
  email,
  password,
  name = "",
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

  if (!isEmailValid) return "Incorrect Email Address";
  if (!isPasswordValid)
    return "Incorrect Password (Must include A-Z, a-z, 0-9, special symbol, 8+ chars)";

  if (!isSignInForm) {
    const trimmedName = name ? name.trim() : "";

    if (trimmedName.length === 0) return "Name is required.";

    const isNameValid = /^[a-zA-Z\s]+$/.test(trimmedName);

    if (!isNameValid) return "Please enter a valid name (letters only).";

    if (password !== retypePassword)
      return "Passwords do not match. Please try again.";
  }

  return null;
};
