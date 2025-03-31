import { EditableFieldProps } from "./EditableField.types";

const EditableField: React.FC<EditableFieldProps> = ({
  label,
  value,
  fieldName,
  goToStep,
}) => (
  <div>
    <strong>{label}:</strong> {value}
    <button
      className="edit-btn"
      type="button"
      onClick={() => goToStep(1, fieldName)}
    >
      ✏️
    </button>
  </div>
);

export default EditableField;
