import { memo } from "react";

const ChartOptions = ({
  handleOptionValue,
  handleOptionDisplay,
}: {
  handleOptionValue: (data: string) => void;
  handleOptionDisplay: (data?: string) => void;
}) => {
  const handleOptionClick = (value: string) => {
    handleOptionValue(value);
    handleOptionDisplay("none");
  };

  const optionItems = ["Daily", "Weekly", "Monthly", "Yearly"];

  return (
    <div>
      <div className="option-items-container">
        {optionItems.map((option, index) => (
          <div
            key={index}
            className="option-item"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};
const ChartOptionsComponent = memo(ChartOptions);
export default ChartOptionsComponent;
