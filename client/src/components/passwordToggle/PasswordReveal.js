export const passwordReveal = (showPassword, setShowPassword) => {
  const passwordInput = document.getElementById("password-input");
  if (!showPassword) {
    passwordInput.setAttribute("type", "text");
    setShowPassword(true);
  } else {
    passwordInput.setAttribute("type", "password");
    setShowPassword(false);
  }
};
