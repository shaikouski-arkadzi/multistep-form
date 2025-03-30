import { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState("forward");

  const nextStep = () => {
    setDirection("forward");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setDirection("backward");
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data: unknown) => {
    console.log("Форма отправлена:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <div className={`form-step ${direction}`} key={step}>
        {step === 1 && (
          <>
            <h2>Шаг 1: Имя</h2>
            <input
              type="text"
              {...register("name", { required: "Введите имя" })}
              className="input-field"
              placeholder="Введите имя"
            />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
            <button onClick={nextStep} type="button" className="button next">
              Далее
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Шаг 2: Email</h2>
            <input
              type="email"
              {...register("email", {
                required: "Введите email",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Введите корректный email",
                },
              })}
              className="input-field"
              placeholder="Введите email"
            />
            {errors.email && (
              <p className="error-text">{errors.email.message}</p>
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
            <h2>Шаг 3: Подтверждение</h2>
            <p>
              <strong>Имя:</strong> {watch("name")}
            </p>
            <p>
              <strong>Email:</strong> {watch("email")}
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
