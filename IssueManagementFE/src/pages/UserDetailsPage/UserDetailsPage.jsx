import React from "react";
import { BaseInputField } from "src/components/Base/BaseInputField/BaseInputField";
import { BaseSelectInput } from "src/components/Base/BaseSelectInput/BaseSelectInput";
import { Card } from "src/components/Card/Card";
import { NavbarDashboard } from "src/components/NavbarDashboard/NavbarDashboard";
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
const status = [
  {
    value: 1,
    label: "Active",
  },
  {
    value: 2,
    label: "Inactive",
  },
];
export const UserDetailsPage = () => {
  return (
    <>
      <NavbarDashboard
        dashboardBody={
          <Card
            classNameCard="col-xxl-11 col-xl-11 col-lg-6 col-md-6 col-sm-6 mx-auto mt-5"
            cardHead="User Details"
            closeBtnLabel="Cancel"
            closeBtnColor="error"
            confirmBtnLabel="Update"
            confirmBtnColor="success"
            cardBody={
              <>
                <BaseInputField
                  type="text"
                  placeholder="Enter Full name"
                  label="Full name"
                  classNameInput="is-active"
                  classNameDiv="col-6"
                  important="true"
                  value="Dung"
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
                  value="dung"
                />
                <BaseInputField
                  type="text"
                  placeholder="Enter Email"
                  label="Email"
                  classNameInput="is-valid"
                  classNameDiv="col-6"
                  tooltip="valid-feedback"
                  important="true"
                  value="dung@gmail.com"
                />
                <BaseInputField
                  type="text"
                  placeholder="Enter Phone"
                  label="Phone"
                  classNameDiv="col-6"
                  value="0123456789"
                />
                <BaseSelectInput
                  label="Role"
                  classNameDiv="col-6"
                  defaultValue={roles[3].label}
                  important="true"
                  options={roles}
                />
                <BaseSelectInput
                  label="Status"
                  classNameDiv="col-6"
                  defaultValue={status[0].label}
                  important="true"
                  options={status}
                />
              </>
            }
          />
        }
      />
    </>
  );
};
