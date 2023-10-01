import React from "react";
import { BaseInputField } from "src/components/Base/BaseInputField/BaseInputField";
import { BaseSelectInput } from "src/components/Base/BaseSelectInput/BaseSelectInput";
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
export const FormProfile = () => {
  return (
    <div className="px-3">
      <h3>General Information</h3>
      <BaseInputField
        type="text"
        placeholder="Enter Full name"
        label="Full name"
        classNameInput="is-active"
        classNameDiv="col-12"
        important="true"
        value="Dung"
      />
      <BaseInputField
        type="text"
        placeholder="Enter Email"
        label="Email"
        classNameInput="is-valid"
        classNameDiv="col-12"
        tooltip="valid-feedback"
        important="true"
        value="dung@gmail.com"
      />
      <BaseInputField
        type="text"
        placeholder="Enter Phone"
        label="Phone"
        classNameDiv="col-12"
        value="0123456789"
      />
      <BaseSelectInput
        label="Role"
        classNameDiv="col-6"
        defaultValue={roles[3].label}
        important="true"
        options={roles}
        disabled="true"
      />
    </div>
  );
};
