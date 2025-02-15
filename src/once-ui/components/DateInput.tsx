// "use client";

// import React, { useState, useCallback, useEffect } from "react";
// import { Input, Flex, DatePicker } from ".";

// interface DateInputProps extends Omit<React.ComponentProps<typeof Input>, "onChange" | "value"> {
//   id: string;
//   label: string;
//   value?: Date;
//   onChange?: (date: Date) => void;
//   minHeight?: number;
//   className?: string;
//   style?: React.CSSProperties;
//   timePicker?: boolean;
// }

// const formatDate = (date: Date, timePicker: boolean) => {
//   const options: Intl.DateTimeFormatOptions = {
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//     ...(timePicker && {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: false,
//     }),
//   };

//   return date.toLocaleString("en-US", options);
// };

// export const DateInput: React.FC<DateInputProps> = ({
//   id,
//   label,
//   value,
//   onChange,
//   error,
//   minHeight,
//   className,
//   style,
//   timePicker = false,
//   ...rest
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [inputValue, setInputValue] = useState(value ? formatDate(value, timePicker) : "");

//   useEffect(() => {
//     if (value) {
//       setInputValue(formatDate(value, timePicker));
//     }
//   }, [value, timePicker]);

//   const handleDateChange = useCallback(
//     (date: Date) => {
//       setInputValue(formatDate(date, timePicker));
//       onChange?.(date);
//       if (!timePicker) {
//         setIsOpen(false);
//       }
//     },
//     [onChange, timePicker],
//   );

//   const handleInputClick = useCallback(() => {
//     setIsOpen(true);
//   }, []);

//   const trigger = (
//     <Input
//       className="cursor-interactive"
//       style={{
//         textOverflow: "ellipsis",
//       }}
//       id={id}
//       label={label}
//       value={inputValue}
//       error={error}
//       readOnly
//       onClick={handleInputClick}
//       {...rest}
//     />
//   );

//   // const dropdown = (
//   //   <Flex padding="20">
//   //     <DatePicker value={value} onChange={handleDateChange} timePicker={timePicker} />
//   //   </Flex>
//   // );

//   // return (
//   //   <DropdownWrapper
//   //     fillWidth
//   //     trigger={trigger}
//   //     minHeight={minHeight}
//   //     dropdown={dropdown}
//   //     isOpen={isOpen}
//   //     onOpenChange={setIsOpen}
//   //     className={className}
//   //     style={{ ...style }}
//   //   />
//   // );
// };

"use client";

import React, { useState, useCallback, useEffect } from "react";
import { Input, Flex, DatePicker } from ".";

interface DateInputProps extends Omit<React.ComponentProps<typeof Input>, "onChange" | "value"> {
  id: string;
  label: string;
  value?: Date;
  onChange?: (date: Date) => void;
  minHeight?: number;
  className?: string;
  style?: React.CSSProperties;
  timePicker?: boolean;
}

const formatDate = (date: Date, timePicker: boolean) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    ...(timePicker && {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  };

  return date.toLocaleString("en-US", options);
};

export const DateInput: React.FC<DateInputProps> = ({
  id,
  label,
  value,
  onChange,
  error,
  className,
  style,
  timePicker = false,
  ...rest
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value ? formatDate(value, timePicker) : "");

  useEffect(() => {
    if (value) {
      setInputValue(formatDate(value, timePicker));
    }
  }, [value, timePicker]);

  const handleDateChange = useCallback(
    (date: Date) => {
      setInputValue(formatDate(date, timePicker));
      onChange?.(date);
      if (!timePicker) {
        setIsOpen(false);
      }
    },
    [onChange, timePicker]
  );

  const handleInputClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={`relative ${className}`} style={style}>
      {/* Input Field */}
      <Input
        className="cursor-pointer"
        id={id}
        label={label}
        value={inputValue}
        error={error}
        readOnly
        onClick={handleInputClick}
        {...rest}
      />

      {/* Date Picker Popup */}
      {isOpen && (
        <div className="absolute z-10 bg-white shadow-lg rounded-lg p-4 mt-2">
          <Flex padding="20">
            <DatePicker value={value} onChange={handleDateChange} timePicker={timePicker} />
          </Flex>
        </div>
      )}
    </div>
  );
};
