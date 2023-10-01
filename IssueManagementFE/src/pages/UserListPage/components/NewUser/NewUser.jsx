import { Input } from "antd";
import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { BaseInputField } from "src/components/Base/BaseInputField/BaseInputField";
import { BaseSelectInput } from "src/components/Base/BaseSelectInput/BaseSelectInput";
import { GeneratePassword } from "../GeneratePassword/GeneratePassword";
const roles = [
  {
    value: 1,
    label: "Admin",
  },
  {
    value: 2,
    label: "Manager",
  },
  {
    value: 3,
    label: "Teacher",
  },
  {
    value: 4,
    label: "Student",
  },
];
export const NewUser = () => {
  return (
    <>
      {/* <FloatingLabel
        type="text"
        label="Username"
        classNameInput="form-control"
        classNameDiv="form-floating g-col-6 floating-warning"
        color="warning"
      /> */}
      <BaseInputField
        type="text"
        placeholder="Enter Full name"
        label="Full name"
        classNameInput="form-control"
        classNameDiv="col-6"
        important="true"
      />
      <BaseInputField
        type="text"
        placeholder="Enter Email"
        label="Email"
        classNameInput="is-valid"
        classNameDiv="col-6"
        tooltip="valid-feedback"
        important="true"
      />
      <BaseInputField
        type="text"
        placeholder="Enter Username"
        label="Username"
        classNameInput="is-invalid"
        classNameDiv="col-6"
        tooltip="invalid-feedback"
        tooltipName="Please provide a valid city."
        important="true"
      />
      <BaseInputField
        type="password"
        placeholder="Enter Password"
        label="Password"
        classNameDiv="col-6"
        important="true"
      />
      <BaseSelectInput
        label="Role"
        classNameDiv="col-6"
        defaultValue={roles[3].label}
        important="true"
        options={roles}
      />
      <BaseInputField
        type="number"
        placeholder="Enter Phone"
        label="Phone"
        classNameDiv="col-6"
        important="false"
        icon="true"
      />

      <BaseInputField
        type="password"
        placeholder="Enter Phone"
        label="Phone"
        classNameInput="is-invalid"
        classNameDiv="col-6"
        important="false"
        icon={<UserOutlined />}
      />
      <GeneratePassword
        length="8"
        uppercase={true}
        lowercase={true}
        numbers={true}
        symbols={true}
        placeholder="Enter Phone"
        label="Phone"
        classNameInput="is-invalid"
        classNameDiv="col-6"
        important="false"
        isRandom="true"
      />
    </>
  );
};
