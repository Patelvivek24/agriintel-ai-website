import React from "react";

interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date) => void;
  placeholder?: string;
  className?: string;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "Select date",
  className,
}) => {
  return (
    <div className={className}>
      <input
        type="date"
        placeholder={placeholder}
        aria-label={placeholder}
        style={{
          padding: "0.5rem 0.75rem",
          borderRadius: "0.5rem",
          border: "1px solid var(--border)",
          background: "var(--background)",
          color: "var(--foreground)",
          fontSize: "0.875rem",
        }}
      />
    </div>
  );
};

export default DatePicker;
