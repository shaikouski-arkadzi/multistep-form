import { EditableFieldProps } from "./EditableField.types";

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  goToStep,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    goToStep();
  };

  return (
    <div>
      <strong>{label}:</strong> {value}
      <button className="edit-btn" type="button" onClick={handleClick}>
        ✏️
      </button>
    </div>
  );
};

export default EditableField;
