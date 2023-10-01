import React from "react";
import { Select } from "antd";

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
export const BaseSelectInput = ({
  label,
  classNameDiv,
  important,
  defaultValue,
  options,
  disabled,
}) => {
  const newOptions = options;
  return (
    <>
      <div className={classNameDiv}>
        <label htmlFor="input-placeholder" className="form-label mt-1">
          {label}
          {important === "true" ? (
            <span className="ms-1" style={{ color: "red" }}>
              *
            </span>
          ) : (
            ""
          )}
        </label>
        <Select
          defaultValue={defaultValue}
          style={{
            width: "100%",
            height: "38px",
          }}
          onChange={handleChange}
          options={newOptions}
          disabled={disabled}
        />
      </div>
    </>
  );
};

