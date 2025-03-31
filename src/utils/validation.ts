import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Введите имя"),
  age: yup
    .number()
    .typeError("Введите число")
    .positive("Введите корректный возраст")
    .integer()
    .required("Введите возраст"),
  email: yup
    .string()
    .trim()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Введите корректный email"
    )
    .required("Введите email"),
  phone: yup
    .string()
    .matches(/^\+?[0-9]{10,15}$/, "Введите корректный телефон")
    .required("Введите телефон"),
  password: yup
    .string()
    .min(8, "Пароль должен содержать минимум 8 символов")
    .matches(/[A-Z]/, "Пароль должен содержать хотя бы одну заглавную букву")
    .matches(/[a-z]/, "Пароль должен содержать хотя бы одну строчную букву")
    .matches(/[0-9]/, "Пароль должен содержать хотя бы одну цифру")
    .matches(
      /[@$!%*?&]/,
      "Пароль должен содержать хотя бы один специальный символ (@, $, !, %, *, ?, &)"
    )
    .required("Введите пароль"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли должны совпадать")
    .required("Подтвердите пароль"),
});
