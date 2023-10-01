import { Button } from "@mui/material";
import React from "react";

export const Card = ({
  cardHead,
  cardBody,
  classNameCard,
  screen,
  closeBtnLabel,
  closeBtnColor,
  confirmBtnLabel,
  confirmBtnColor,
}) => {
  return (
    <div className={classNameCard}>
      <div className="card custom-card">
        {cardHead !== undefined ? (
          <div className="card-header">
            <div className="card-title">
              {screen === "true" ? <h2>{cardHead}</h2> : cardHead}
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="card-body row">{cardBody}</div>
        <div className="card-footer">
          <Button
            className="float-right ms-3"
            variant="outlined"
            color={confirmBtnColor === undefined ? 'success' : confirmBtnColor}
          >
            {confirmBtnLabel}
          </Button>{" "}
          {console.log(closeBtnColor)}
          {console.log(confirmBtnColor)}
          <Button className="float-right" variant="outlined" color="error">
            {closeBtnLabel}
          </Button>
        </div>
      </div>
    </div>
  );
};
