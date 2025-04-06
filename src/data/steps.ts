import { Steps } from "../types/steps.types";

export const steps: Steps = {
  1: {
    title: "Шаг 1: Персональная информация",
    fields: [
      {
        label: "Имя",
        key: "name",
        type: "text",
        placeholder: "Введите имя",
        required: true,
      },
      {
        label: "Возраст",
        key: "age",
        type: "number",
        placeholder: "Введите возраст",
      },
    ],
  },
  2: {
    title: "Шаг 2: Контактная информация",
    fields: [
      {
        label: "Email",
        key: "email",
        type: "email",
        placeholder: "Введите email",
      },
      {
        label: "Телефон",
        key: "phone",
        type: "number",
        placeholder: "Введите телефон",
      },
    ],
  },
  3: {
    title: "Шаг 3: Пароль",
    fields: [
      {
        label: "Пароль",
        key: "password",
        type: "password",
        placeholder: "Введите пароль",
      },
      {
        label: "Повторить пароль",
        key: "confirmPassword",
        type: "password",
        placeholder: "Повторите пароль",
      },
    ],
  },
};
