import {
  required,
  minLength,
  email,
  maxLength,
} from "vuelidate/lib/validators";

export const nameValidation = [required, minLength(5), maxLength(50)];

export const emailValidation = [required, email];

export const subjectValidation = [maxLength(100)];

export const messageValidation = [required, maxLength(500)];
