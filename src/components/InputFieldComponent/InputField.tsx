import React, { useState } from "react";
import styles from "./InputField.module.css";
import { SvgIcon } from "../IconComponent/SvgIcon";

/** The props type of {@link InputField | `InputField`}. */
export type InputFieldProps = {
  name: string;
  value?: string;
  placeholder?: string;
  label: string;
  //type: "password" | "text" | "disabled";
  type: string; //password, text, disabled
  isDisabled?: boolean;
  //size:"small" | "medium"| "large";
  size: string;
  required?: boolean;
  maxlen?: number;
  register: any;
  validationSchema?: any;
  errors: any;
  customValidation?: any;
};

/**
 *
 * Input Field Component
 * @category component
 * @returns {JSX.Element} The rendered input field component.
 *
 * @example
 * Render an Input Field
 * ```tsx
 * <InputField isWrong={false}/>
 * ```
 */

export function InputField({
  name,
  label,
  placeholder,
  value,
  type,
  isDisabled = false,
  size,
  required = false,
  maxlen,
  register,
  validationSchema,
  errors,
}: InputFieldProps) {
  const [inputValue, setInputValue] = useState(value);
  const [inputType, setInputType] = useState(type);
  const [isFocused, setIsFocused] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("");
  const inputfieldRegister = register(name, validationSchema);
  const iconsize = size === "small" ? "sm" : size === "medium" ? "md" : "lg";
  const labelsize = "label" + size;
  const [passIconName, setPassIconName] = useState("eye-slash");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    value = inputValue;
  };

  const togglefield = () => {
    setInputType(inputType === "password" ? "text" : "password");
    setPassIconName(passIconName === "eye-slash" ? "eye" : "eye-slash");
  };

  const handleInputFocus = () => {
    setIsFocused(true);
    setPlaceholderText(placeholder + "");
  };

  const handleInputBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(inputValue !== "");
    setPlaceholderText("");
    setIsFocused(event.target.value !== "");
  };

  return (
    <>
      <div className={`${type == "hidden" ? styles.hidden : ""}`}>
        <div
          className={`${
            errors[name]
              ? styles.isWronginputfieldcontainer
              : styles.defaultinputfieldcontainer
          } `}
        >
          <input
            name={name}
            type={inputType}
            {...inputfieldRegister}
            onChange={(e) => {
              inputfieldRegister.onChange(e);
              handleInputChange(e);
            }}
            value={inputValue}
            //value={placeholder}
            placeholder={placeholderText}
            onFocus={handleInputFocus}
            onBlur={(e) => handleInputBlur(e)}
            maxLength={maxlen}
            className={`${
              errors[name] ? styles.isWronginputfield : styles.defaultinputfield
            } ${styles[size]}`}
            disabled={isDisabled}
            //required={required}
          />

          {/* floatingLabel */}
          <label
            className={`${
              isFocused || inputValue
                ? styles.floatingLabel
                : styles.floatingLabeldefault
            } ${errors[name] ? styles.isWrongLabel : ""} ${
              isFocused || inputValue
                ? styles.labelsizefloating
                : styles[labelsize]
            }`}
          >
            {label}
            {required && <span style={{ color: "red" }}>*</span>}
          </label>

          {/* cross/eye-icon - color of svg will change based on the presence of error */}
          {type === "password"
            ? inputValue && (
                <div
                  className={`${styles.icon}`}
                  onClick={togglefield}
                  style={{
                    color: errors[name]
                      ? "var(--neutral---main350)"
                      : "var(--primary---main300)",
                  }}
                >
                  <SvgIcon iconName={passIconName} wrapperStyle={iconsize} />
                </div>
              )
            : inputValue && (
                <div
                  className={`${styles.icon}`}
                  onClick={() => setInputValue("")}
                  style={{
                    color: errors[name]
                      ? "var(--error---main900)"
                      : "var(--neutral---main350)",
                  }}
                >
                  <SvgIcon iconName="x-circle" wrapperStyle={iconsize} />
                </div>
              )}
        </div>
      </div>
      <div></div>
      {errors && errors[name] && (
        <span className={`${styles.error}`}>{errors[name]?.message}</span>
      )}
    </>
  );
}
