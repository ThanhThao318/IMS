import React from "react";
import { MailOutlined } from "@ant-design/icons";
import "./ResetPassword.css";
import { BaseInputField } from "src/components/Base/BaseInputField/BaseInputField";
import { BaseButton } from "src/components/Base/BaseButton/BaseButton";
import { NavLink } from "react-router-dom";
const ResetPassword = () => {
  return (
    <>
      <div>
        <h1 className="title-reset">Forgot Password?</h1>
        <span>
          No problem. Just enter your email address below and we 'll send you
          password reset instructions
        </span>

        <BaseInputField
          type="text"
          placeholder="Enter your email"
          label="Email"
          classNameDiv="col-12 mt-2 "
          important="true"
          icon={<MailOutlined style={{ color: "gray" }} />}
        />
        <BaseButton
          color="info"
          value="Reset Password"
          nameTitle="register-form-button mx-auto"
        />
      </div>
    </>
  );
};

export default ResetPassword;
