import { Button } from "@mui/material";
import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { BaseButton } from "../Base/BaseButton/BaseButton";

export const ModalCmpt = ({
  modalBody,
  btnToggle,
  modalBtn,
  classNameBtn,
  closeBtn,
  modalBtnColor,
  closeBtnColor,
  variant,
  isAnchor,
  isHeader,
  isFooter,
  isImage,
  imgSrc,
  size,
}) => {
  const [modal, setModal] = useState(false);
  const [backdrop, setBackdrop] = useState(true);
  const [keyboard, setKeyboard] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      {isAnchor === "true" ? (
        <a onClick={toggle} style={{ cursor: "pointer", fontSize: "15px" }}>
          {btnToggle}
        </a>
      ) : (
        <BaseButton
          onClick={toggle}
          color="secondary"
          variant="outline"
          value="ADD NEW"
        >
          {btnToggle}
        </BaseButton>
      )}

      <Modal
        isOpen={modal}
        toggle={toggle}
        backdrop={backdrop}
        keyboard={keyboard}
        size={size}
        centered
      >
        {isHeader === "false" ? (
          ""
        ) : (
          <ModalHeader toggle={toggle}>
            {modalBtn}
            {/* <img style={{width: "100px"}} src="https://img.nhandan.com.vn/Files/Images/2020/07/26/nhat_cay-1595747664059.jpg"/> */}
          </ModalHeader>
        )}

        <ModalBody className="row">
          {" "}
          {isImage === "true" ? (
            <div className="d-block header-resetPass">
              <img
                src={imgSrc}
                style={{ width: "30%" }}
                className="d-block mx-auto "
              />
              <button
                type="button"
                className="btn-close"
                onClick={toggle}
              ></button>
            </div>
          ) : (
            ""
          )}
          {modalBody}
        </ModalBody>

        {isFooter === "false" ? (
          ""
        ) : (
          <ModalFooter>
            <BaseButton
              value={closeBtn}
              variant={variant}
              color={closeBtnColor}
              onClick={toggle}
            />
            <BaseButton
              className="ms-3"
              value={modalBtn}
              variant={variant}
              color={modalBtnColor}
              onClick={toggle}
            />
          </ModalFooter>
        )}
      </Modal>
    </div>
  );
};
