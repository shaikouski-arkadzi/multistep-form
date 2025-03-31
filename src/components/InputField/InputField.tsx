import { InputFieldProps } from "./InputField.types";

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  register,
  error,
  placeholder,
}) => (
  <>
    <input
      className="input-field"
      type={type}
      {...register(name)}
      placeholder={placeholder}
    />
    {error && <p className="error-text">{error.message}</p>}
  </>
);

export default InputField;
