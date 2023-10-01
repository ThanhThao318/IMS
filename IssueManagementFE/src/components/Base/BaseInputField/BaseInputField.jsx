import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import React, { useState } from "react";
import { BaseButton } from "../BaseButton/BaseButton";

export const BaseInputField = ({
  type,
  label,
  value,
  placeholder,
  classNameDiv,
  classNameInput,
  tooltip,
  tooltipName,
  important,
  icon,
  onClick,
  random,
  setRandom,
  isRandom,
}) => {
  const classNameInputTemp = "form-control " + classNameInput;
  const classNameDivTemp = "input-group " + classNameDiv;
  const [inputType, setInputType] = useState(type);
  return (
    <>
      <div className={classNameDiv}>
        <label htmlFor="input-placeholder" className="form-label mt-1 me-2">
          {label}
          {important === "true" ? (
            <span className="ms-1" style={{ color: "red" }}>
              *
            </span>
          ) : (
            ""
          )}
        </label>
        {(type === "password" && isRandom === "true") ? (
          <>
            <Switch
              checkedChildren="Random"
              unCheckedChildren="Input"
              defaultChecked={random}
              onChange={() => setRandom(!random)}
            />
            <BaseButton color="warning" variant="outline" value="Random"/>
          </>
        ) : (
          ""
        )}
        <div className="input-group">
          {icon === undefined ? (
            ""
          ) : (
            <span className="input-group-text" id="basic-addon1">
              {icon}
            </span>
          )}
          <input
            type={inputType}
            className={classNameInputTemp}
            id="input-placeholder"
            placeholder={placeholder}
            value={value}
            onClick={onClick}
            required
          />
          {type === "password" ? (
            <span className="input-group-text">
              {inputType === "password" ? (
                <EyeInvisibleOutlined
                  id="togglePassword"
                  onClick={() => {
                    {
                      setInputType("text");
                    }
                  }}
                />
              ) : (
                <EyeOutlined
                  id="togglePassword"
                  onClick={() => {
                    {
                      setInputType("password");
                    }
                  }}
                />
              )}
            </span>
          ) : (
            ""
          )}
        </div>

        <div className={tooltip}>{tooltipName}</div>
      </div>
    </>
  );
};
