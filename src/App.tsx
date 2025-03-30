import { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [direction, setDirection] = useState("forward");

  const nextStep = () => {
    setDirection("forward");
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setDirection("backward");
    setStep((prev) => prev - 1);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <div className={`form-step ${direction}`} key={step}>
        {step === 1 && (
          <>
            <h2>Шаг 1: Имя</h2>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              placeholder="Введите имя"
            />
            <button onClick={nextStep} className="button next">
              Далее
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2>Шаг 2: Email</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              placeholder="Введите email"
            />
            <div className="button-group">
              <button onClick={prevStep} className="button back">
                Назад
              </button>
              <button onClick={nextStep} className="button next">
                Далее
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2>Шаг 3: Подтверждение</h2>
            <p>
              <strong>Имя:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <div className="button-group">
              <button onClick={prevStep} className="button back">
                Назад
              </button>
              <button className="button submit">Отправить</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
