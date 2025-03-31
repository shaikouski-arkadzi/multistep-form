import { StepButtonsProps } from "./StepButtons.types";

const StepButtons: React.FC<StepButtonsProps> = ({
  onNext,
  onPrev,
  isSubmitStep = false,
}) => {
  return (
    <div className="button-group">
      {onPrev && (
        <button onClick={onPrev} type="button" className="button back">
          Назад
        </button>
      )}
      {isSubmitStep ? (
        <button type="submit" className="button submit">
          Отправить
        </button>
      ) : (
        <button onClick={onNext} type="button" className="button next">
          Далее
        </button>
      )}
    </div>
  );
};

export default StepButtons;
