// PL
export const USERNAME = {
  errorMessage: {
    required: "Nazwa użytkownika jest wymagana",
    min: "Minimalna ilość znaków to 3",
    max: "Maksymalna ilośc znaków to 30"
  },
  values: {
    min: 3,
    max: 30
  }
};

export const FIRSTNAME = {
  errorMessage: {
    required: "Imię jest wymagane",
    min: "Minimalna ilość znaków to 3",
    max: "Maksymalna ilośc znaków to 30"
  },
  values: {
    min: 3,
    max: 30
  }
};

export const LASTNAME = {
  errorMessage: {
    required: "Nazwisko jest wymagane",
    min: "Minimalna ilość znaków to 3",
    max: "Maksymalna ilośc znaków to 30"
  },
  values: {
    min: 3,
    max: 30
  }
};

export const EMAIL = {
  errorMessage: {
    required: "E-mail jest wymagany",
    email: "Nieprawidłowy e-mail"
  },
  values: {}
};

export const PASSWORD = {
  errorMessage: {
    required: "Hasło jest wymagane",
    min: "Minimalna ilość znaków to 5",
    max: "Maksymalna ilośc znaków to 30",
    match:
      "Hasło musi posiadać co najmniej jedną cyfrę, małą oraz wielką literę (bez znaków specjalnych)"
  },
  values: {
    min: 5,
    max: 30,
    match: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[a-zA-Z0-9]{1,}$/
  }
};

export const OLD_PASSWORD = {
  errorMessage: {
    required: "Hasło jest wymagane"
  },
  values: {}
};

export const CONFIRM_PASSWORD = {
  errorMessage: {
    required: "Hasło jest wymagane",
    testMsg: "Hasła muszą być identyczne"
  },
  values: {}
};
