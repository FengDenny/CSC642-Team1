// Validator for last and first name
export const nameValidation = (nameType, name, setError) => {
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*){0,39}$/;
  switch (nameType) {
    case nameType:
      if (nameType.length === 0) {
        setError(`${name} is required.`);
      } else if (nameType.length >= 40 || !nameType.match(nameRegex)) {
        setError(`${name} can only be 40 characters.`);
      } else {
        setError("");
      }
      break;
    default:
      break;
  }
};

export const emailValidation = (nameType, setError) => {
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!nameType.match(emailRegex)) {
    setError("Enter a valid email.");
  } else {
    setError("");
  }
};

export const passwordValidation = (nameType, setError) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!nameType.match(passwordRegex)) {
    setError(
      "Password must be between 6 to 20 characters containing one numeric digit, one uppercase and one lowercase letter "
    );
  } else {
    setError("");
  }
};

export const addressValidations = (nameType, name, setError) => {
  const addressRegex =
    /^(\d+) ?([A-Za-z](?= ))? (.*?) ([^ ]+?) ?((?<= )APT)? ?((?<= )\d*)?$/;
  switch (nameType) {
    case nameType:
      if (nameType.length === 0) {
        setError(`${name} is required.`);
      } else if (
        name === "Address" &&
        (nameType.length >= 40 || !nameType.match(addressRegex))
      ) {
        setError(`${name} can only be up to 40 alphanumeric characters.`);
      }
      break;
    default:
      break;
  }
};

export const priceValidation = (nameType, name, setError) => {
  const nonNegNumRegex = /^[0-9]+$/;
  switch (nameType) {
    case nameType:
      if (nameType.length === 0) {
        setError(`${name} is required.`);
      } else if (!nameType.match(nonNegNumRegex)) {
        setError(`Invalid ${name}. `);
      } else {
        setError("");
      }
      break;
    default:
      break;
  }
};

export const dateValidation = (nameType, name, setError) => {
  const dateRegex =
    /^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/;
  switch (nameType) {
    case nameType:
      if (nameType.length === 0) {
        setError(`${name} is required.`);
      } else if (!nameType.match(dateRegex)) {
        setError(`Incorrect date format. must be in mm/dd/yyyy `);
      } else {
        setError("");
      }
      break;
    default:
      break;
  }
};

export const containCommasValidations = (nameType, setError) => {
  if (nameType.includes(",") === false) {
    setError("Please use the following format: A,B,C");
  } else {
    setError("");
  }
};
