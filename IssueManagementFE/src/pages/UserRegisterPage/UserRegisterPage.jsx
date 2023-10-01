import React from "react";

import "./UserRegisterPage.css";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { BaseInputField } from "src/components/Base/BaseInputField/BaseInputField";
import {
  LockOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { BaseButton } from "src/components/Base/BaseButton/BaseButton";
import { NavLink } from "react-router-dom";

const UserRegisterPage = () => {
  return (
    <>
      <div className="background-register">
        <MDBContainer className="p-3 ms-0 me-0 d-flex flex-column w-25 register__body">
          <div className="d-flex flex-row mt-5 mb-5">
            <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: "#ff6219" }} />
            <span className="h1 fw-bold mb-0">IMS</span>
          </div>
          <div className="d-flex flex-row ">
            <p className="lead fw-normal mb-0">Sign in with</p>
            <MDBBtn
              floating
              size="md"
              tag="a"
              className="me-3 mx-4"
              style={{
                color: "white",
                background: "red",
              }}
            >
              <MDBIcon fab icon="google" />
            </MDBBtn>
            <MDBBtn
              floating
              size="md"
              tag="a"
              className="me-3"
              style={{ color: "white", background: "#000080" }}
            >
              <MDBIcon fab icon="facebook-f" />
            </MDBBtn>

            <MDBBtn floating size="md" tag="a" className="me-3">
              <MDBIcon fab icon="twitter" />
            </MDBBtn>
          </div>
          <div className="divider d-flex align-items-center my-3">
            <p className="text-center  mx-3 mb-0">or continue with</p>
          </div>
          <BaseInputField
            type="text"
            placeholder="Enter your fullname"
            label="Fullname"
            classNameDiv="col-12 "
            important="true"
            icon={<UserOutlined style={{ color: "gray" }} />}
          />
          <BaseInputField
            type="text"
            placeholder="Enter your email"
            label="Email"
            classNameDiv="col-12 "
            important="true"
            icon={<MailOutlined style={{ color: "gray" }} />}
          />
          <BaseInputField
            type="text"
            placeholder="Enter your Phone"
            label="Phone"
            classNameDiv="col-12 "
            important="true"
            icon={<PhoneOutlined style={{ color: "gray" }} />}
          />
          <BaseInputField
            type="password"
            placeholder="Enter password"
            label="Password"
            classNameDiv="col-12 "
            important="true"
            icon={<LockOutlined style={{ color: "gray" }} />}
          />
          <BaseInputField
            type="password"
            placeholder="Enter confirm password"
            label="Confirm Password"
            classNameDiv="col-12 mb-4"
            important="true"
            icon={<LockOutlined style={{ color: "gray" }} />}
          />
          <BaseButton
            color="info"
            value="REGISTER"
            className="register-form-button"
          />
          <div className="text-center">
            <p>
              Already have an account? <NavLink to="/sign-in">Sign In</NavLink>
            </p>
          </div>
        </MDBContainer>
      </div>
    </>
  );
};

export default UserRegisterPage;
