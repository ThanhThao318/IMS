import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import "./UserListPage.css";

import { DatePicker } from "antd";
import Search from "antd/es/input/Search";
import { ModalCmpt } from "src/components/Modal/ModalCmpt";
import Combobox from "src/components/Combobox/Combobox";
import { NavbarDashboard } from "src/components/NavbarDashboard/NavBarDashboard";
import UserTable from "./components/UserTable/UserTable";
import { NewUser } from "./components/NewUser/NewUser";

const { RangePicker } = DatePicker;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const UserListPage = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <NavbarDashboard
        dashboardBody={
          <Box sx={{ flexGrow: 1 }} className="box mx-auto mt-4">
            <Grid container spacing={4}>
              <Grid item xs={6} md={6} className="d-flex">
                <Combobox name="Role" />
                <Combobox name="Active" className="ms-3" />
                <RangePicker showTime />
              </Grid>
              <Grid item xs={6} md={6}>
                <div className="float-right d-flex">
                  <Search
                    placeholder="input search text"
                    allowClear
                    style={{
                      width: 200,
                    }}
                  />
                  <ModalCmpt
                    classNameBtn="btn btn-light btn-wave waves-effect waves-light px-5 ms-3 my-auto"
                    btnToggle="Add New"
                    modalBtn="Add New"
                    modalBtnColor="secondary"
                    closeBtn="Cancel"
                    closeBtnColor="dark"
                    variant="outline"
                    modalBody={<NewUser />}
                  />
                </div>
              </Grid>
              <Grid item xs={6} md={12}>
                <UserTable />
              </Grid>
            </Grid>
          </Box>
        }
      />
    </>
  );
};

