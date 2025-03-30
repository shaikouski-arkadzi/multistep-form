import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./App.css";

interface FormData {
  name: string;
  age: number;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
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

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
    setFocus,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const goToStep = (targetStep: number, field: keyof FormData) => {
    setStep(targetStep);
    setTimeout(() => setFocus(field), 0);
  };

  const [step, setStep] = useState<number>(1);
  const [direction, setDirection] = useState<string>("forward");

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = [];
    if (step === 1) fieldsToValidate = ["name", "age"];
    if (step === 2) fieldsToValidate = ["email", "phone"];
    if (step === 3) fieldsToValidate = ["password", "confirmPassword"];

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      setDirection("forward");
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setDirection("backward");
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log("Форма отправлена:", data);
  };

  const formData = watch();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className={`form-step ${direction}`} key={step}>
        {step === 1 && (
          <>
            <h2>Шаг 1: Персональная информация</h2>
            <input
              type="text"
              {...register("name")}
              placeholder="Введите имя"
              className="input-field"
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}

            <input
              type="number"
              {...register("age")}
              placeholder="Введите возраст"
              className="input-field"
            />
            {errors.age && <p className="error-text">{errors.age.message}</p>}

            <button onClick={nextStep} type="button" className="button next">
              Далее
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Шаг 2: Контактные данные</h2>
            <input
              type="email"
              {...register("email")}
              placeholder="Введите email"
              className="input-field"
            />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
            )}

            <input
              type="text"
              {...register("phone")}
              placeholder="Введите телефон"
              className="input-field"
            />
            {errors.phone && (
              <p className="error-text">{errors.phone.message}</p>
            )}

            <div className="button-group">
              <button onClick={prevStep} type="button" className="button back">
                Назад
              </button>
              <button onClick={nextStep} type="button" className="button next">
                Далее
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Шаг 3: Пароль</h2>
            <input
              type="password"
              {...register("password")}
              placeholder="Введите пароль"
              className="input-field"
            />
            {errors.password && (
              <p className="error-text">{errors.password.message}</p>
            )}

            <input
              type="password"
              {...register("confirmPassword")}
              placeholder="Подтвердите пароль"
              className="input-field"
            />
            {errors.confirmPassword && (
              <p className="error-text">{errors.confirmPassword.message}</p>
            )}

            <div className="button-group">
              <button onClick={prevStep} type="button" className="button back">
                Назад
              </button>
              <button onClick={nextStep} type="button" className="button next">
                Далее
              </button>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <h2>Шаг 4: Подтверждение данных</h2>
            <p>
              <strong>Имя:</strong> {formData.name}{" "}
              <button
                className="edit-btn"
                type="button"
                onClick={() => goToStep(1, "name")}
              >
                ✏️
              </button>
            </p>
            <p>
              <strong>Возраст:</strong> {formData.age}{" "}
              <button
                className="edit-btn"
                type="button"
                onClick={() => goToStep(1, "age")}
              >
                ✏️
              </button>
            </p>
            <p>
              <strong>Email:</strong> {formData.email}{" "}
              <button
                className="edit-btn"
                type="button"
                onClick={() => goToStep(2, "email")}
              >
                ✏️
              </button>
            </p>
            <p>
              <strong>Телефон:</strong> {formData.phone}{" "}
              <button
                className="edit-btn"
                type="button"
                onClick={() => goToStep(2, "phone")}
              >
                ✏️
              </button>
            </p>
            <p>
              <strong>Пароль:</strong> ********{" "}
              <button
                className="edit-btn"
                type="button"
                onClick={() => goToStep(3, "password")}
              >
                ✏️
              </button>
            </p>

            <div className="button-group">
              <button onClick={prevStep} type="button" className="button back">
                Назад
              </button>
              <button type="submit" className="button submit">
                Отправить
              </button>
            </div>
          </>
        )}
      </div>
    </form>
  );
}

export default App;
