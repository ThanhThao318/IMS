import React from "react";

import "./UserLoginPage.css";
import { MDBBtn, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import { BaseInputField } from "src/components/Base/BaseInputField/BaseInputField";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { GeneratePassword } from "../UserListPage/components/GeneratePassword/GeneratePassword";
import { BaseButton } from "src/components/Base/BaseButton/BaseButton";
import { NavLink } from "react-router-dom";
import { Modal } from "antd";
import { ModalCmpt } from "src/components/Modal/ModalCmpt";
import ResetPassword from "./components/ResetPassword/ResetPassword";

const UserLoginPage = () => {
  return (
    <>
      <div className="background-login">
        <MDBContainer className="p-3 ms-0 me-0 d-flex flex-column w-25 sign-in__body">
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
            placeholder="Enter Email or Phone"
            label="Email or Phone"
            classNameDiv="col-12 mb-4"
            important="true"
            icon={<UserOutlined style={{ color: "gray" }} />}
          />
          <BaseInputField
            type="password"
            placeholder="Enter password"
            label="Password"
            classNameDiv="col-12 mb-2"
            important="true"
            icon={<LockOutlined style={{ color: "gray" }} />}
          />
          <div className="d-flex justify-content-between mb-4">
            <ModalCmpt
              classNameBtn="btn btn-light btn-wave waves-effect waves-light px-5 ms-3 my-auto"
              btnToggle="Forgot password?"
              isAnchor="true"
              variant="outline"
              isFooter="false"
              isHeader="false"
              modalBody={<ResetPassword />}
              isImage="true"
              imgSrc="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
              size="md"
            />
          </div>
          <BaseButton
            color="info"
            value="SIGN IN"
            className="login-form-button"
          />
          <div className="text-center">
            <p>
              Don't have an account? <NavLink to="/register">Register</NavLink>
            </p>
          </div>
        </MDBContainer>
      </div>
    </>
  );
};

export default UserLoginPage;
