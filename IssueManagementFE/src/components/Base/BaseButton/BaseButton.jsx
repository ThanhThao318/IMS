import React from "react";

export const BaseButton = ({
  color,
  disabled,
  variant,
  onClick,
  value,
  nameTitle,
}) => {
  const className = `${nameTitle} btn btn-wave waves-effect waves-light btn-${
    variant === "outline" ? variant + "-" : ""
  }${color}${variant === "light" ? "-" + variant : ""}`;
  return (
    <>
      <button onClick={onClick} className={className}>
        {value}
      </button>
    </>
  );
};
