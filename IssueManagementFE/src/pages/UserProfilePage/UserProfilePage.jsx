import React from "react";
import "./UserProfilePage.css";
import { Card } from "src/components/Card/Card";
import { NavbarDashboard } from "src/components/NavbarDashboard/NavbarDashboard";
import { AvatarProfile } from "./components/AvatarProfile/AvatarProfile";
import { FormProfile } from "./components/FormProfile/FormProfile";

export const UserProfilePage = () => {
  return (
    <NavbarDashboard
      dashboardBody={
        <div className="py-3">
          <Card
            cardHead="User Profile"
            classNameCard="col-xxl-11 col-xl-11 col-lg-6 col-md-6 col-sm-6 mx-auto"
            cardBody={
              <>
                <div className="col-4">
                  <AvatarProfile
                    fullname="Ichigo"
                    userImg="https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"
                  />
                </div>
                <div className="col-8">
                  <FormProfile />
                </div>
              </>
            }
            screen="true"
            closeBtnLabel="Back"
            closeBtnColor="btn btn-outline-dark btn-wave waves-effect"
            confirmBtnLabel="Update"
            confirmBtnColor="success"
          />
        </div>
      }
    />
  );
};
