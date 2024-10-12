import { Button } from "@/components/core/button/Button";
import { classNames } from "@/utils/style";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import type { FunctionComponent } from "react";

export interface QuantityProps {
  /** item name to announce to screenreaders */
  accessibilityItemName: string;
  /** minimum value - defaults to 1 */
  min?: number;
  /** maximum value - defaults to 99 */
  max?: number;
  onChange: (value: number) => void;
  size?: "md" | "sm";
  value: number;
}

export const QuantityInput: FunctionComponent<QuantityProps> = (props) => {
  const {
    accessibilityItemName,
    onChange,
    value,
    min = 1,
    max = 99,
    size = "md",
  } = props;

  const isMinusDisabled = value <= min;
  const isPlusDisabled = value >= max;

  const buttonClassName = classNames(
    size === "sm" && "text-xl w-6 h-6 leading-3",
  );

  return (
    <div className="inline-flex items-center gap-3">
      <span className="sr-only">
        Quantity of {accessibilityItemName}: {value}
      </span>

      <Button
        variant="icon-solid"
        icon={faMinus}
        aria-label="Decreases quantity by 1"
        onClick={() => onChange(value - 1)}
        disabled={isMinusDisabled}
        className={buttonClassName}
      />

      <strong
        aria-hidden={true}
        className={classNames(
          "mt-1 font-teko",
          size === "sm" ? "text-2xl" : "text-3xl",
        )}
      >
        {value}
      </strong>

      <Button
        variant="icon-solid"
        icon={faPlus}
        aria-label="Increases quantity by 1"
        onClick={() => onChange(value + 1)}
        disabled={isPlusDisabled}
        className={buttonClassName}
      />
    </div>
  );
};
