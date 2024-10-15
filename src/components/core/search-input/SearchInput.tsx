import { Button } from "@/components/core/button/Button";
import { Input } from "@/components/core/input/Input";
import { classNames } from "@/utils/style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ComponentProps, FunctionComponent } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export interface SearchInputProps
  extends Omit<ComponentProps<typeof Input>, "labelVisible"> {
  buttonAccessibilityLabel: string;
  inputContainerClassName?: string;
  inputClassName?: string;
}

export const SearchInput: FunctionComponent<SearchInputProps> = (props) => {
  const {
    buttonAccessibilityLabel,
    className,
    inputClassName,
    inputContainerClassName,
    ...inputProps
  } = props;

  return (
    <div className={classNames("relative flex items-center", className)}>
      <Button
        aria-label={buttonAccessibilityLabel}
        variant="icon"
        className="text-md absolute left-3 leading-none text-foreground"
        type="submit"
      >
        <FontAwesomeIcon icon={faSearch} />
      </Button>
      <Input
        className={classNames(
          "rounded-2xl bg-transparent py-1 pl-10",
          inputClassName,
        )}
        containerClassName={inputContainerClassName}
        labelVisible={false}
        {...inputProps}
      />
    </div>
  );
};
